import { Post } from "@/interfaces/posts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const postsURL = "/api/posts";

export const fetchPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: { error: string } }
>("posts/fetchPosts", async (_, thunkAPI) => {
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
    return thunkAPI.rejectWithValue({ error: "Unhandled error" });
  }
});

export const fetchPostById = createAsyncThunk<
  Post,
  number,
  { rejectValue: { error: string } }
>("posts/fetchPostById", async (postId, thunkAPI) => {
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
    return thunkAPI.rejectWithValue({ error: "Unhandled error" });
  }
});

const getInitialFavorites = (): number[] => {
  if (typeof window !== "undefined") {
    const jsonFavorites = localStorage.getItem("favorites");
    if (!jsonFavorites) {
      return [];
    }
    return JSON.parse(jsonFavorites).map((id: string) => parseInt(id, 10));
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
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removePostFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (postId) => postId !== action.payload
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
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
        if (state.posts.length < 1) {
          toast.error("Nie znaleziono postów");
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.postsLoading = false;
        state.posts = [];
        state.postsError = action.payload?.error || "Błąd pobierania postów";
        toast.error(state.postsError);
      })
      .addCase(fetchPostById.pending, (state) => {
        state.postsDetailedLoading = true;
        state.postsDetailedError = null;
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<Post>) => {
          const newPost = action.payload;
          const postIndex = state.postsDetailed.findIndex(
            (post) => post.id === newPost.id
          );
          if (postIndex >= 0) {
            state.postsDetailed[postIndex] = newPost;
          } else {
            state.postsDetailed.push(newPost);
          }
          state.postsDetailedLoading = false;
        }
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.postsDetailedLoading = false;
        state.postsDetailedError =
          action.payload?.error || "Błąd pobierania posta";
      });
  },
});

export const { addPostToFavorites, removePostFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;
