import { Post } from "@/interfaces/posts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const postsURL = "/api/posts";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(postsURL);
      const data = await response.json();
      if (data.error) {
        return thunkAPI.rejectWithValue({ error: data.error });
      }
      return data as Post[];
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }

      return thunkAPI.rejectWithValue({ error: "unhandled error" });
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostsById",
  async (postId: number, thunkAPI) => {
    try {
      const response = await fetch(`${postsURL}/${postId}`);
      const data = await response.json();
      if (data.error) {
        return thunkAPI.rejectWithValue({ error: data.error });
      }
      return data as Post;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }

      return thunkAPI.rejectWithValue({ error: "unhandled error" });
    }
  }
);

const getInitialFavorites = (): number[] => {
  if (typeof window !== "undefined") {
    const jsonFavorites = localStorage.getItem("favorites");
    if (!jsonFavorites) {
      return [];
    }

    const favorites = JSON.parse(jsonFavorites).map((id: string) =>
      parseInt(id)
    );

    return favorites;
  }
  return [];
};

interface PostsState {
  posts: Post[];
  postsLoading: boolean;
  postsError: string | null;
  postsDetailed: Post[];
  postsDetailedLoading: boolean;
  postsDetailedError: string | null;
  favorites: number[];
}

const initialState: PostsState = {
  favorites: getInitialFavorites(),
  posts: [],
  postsLoading: true,
  postsError: null,
  postsDetailed: [],
  postsDetailedLoading: true,
  postsDetailedError: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostToFavorites: (state, action: PayloadAction<number>) => {
      state.favorites.push(action.payload);

      if (typeof window !== "undefined") {
        const jsonFavorites = JSON.stringify(state.favorites);
        localStorage.setItem("favorites", jsonFavorites);
      }
    },
    removePostFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (postId) => postId !== action.payload
      );

      if (typeof window !== "undefined") {
        const jsonFavorites = JSON.stringify(state.favorites);
        localStorage.setItem("favorites", jsonFavorites);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.postsLoading = true;
        state.postsError = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.postsLoading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.postsLoading = false;
        state.posts = [];
        //TODO: do poprawy
        const errorMessage = (action.payload as { error: string }).error;
        state.postsError = errorMessage || "Error fetching posts";
      })
      .addCase(fetchPostById.pending, (state) => {
        state.postsDetailedLoading = true;
        state.postsDetailedError = null;
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<Post>) => {
          const newPost = action.payload;
          const postExistInStore = state.postsDetailed.some(
            (post) => post.id === newPost.id
          );
          if (postExistInStore) {
            state.postsDetailed = state.postsDetailed.map((post) =>
              post.id === newPost.id ? newPost : post
            );
          } else {
            state.postsDetailed.push(newPost);
          }
          state.postsDetailedLoading = false;
        }
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.postsDetailedLoading = false;
        //TODO: do poprawy
        const errorMessage = (action.payload as { error: string }).error;
        state.postsDetailedError = errorMessage || "Error fetching posts";
      });
  },
});

export const { addPostToFavorites, removePostFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;
