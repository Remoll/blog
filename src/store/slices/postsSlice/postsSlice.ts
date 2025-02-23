import { postsURL } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import checkIsClientEnv from "@/utils/checkIsClientEnv.ts/checkIsClientEnv";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  if (checkIsClientEnv()) {
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
  postsDetailed: Post[];
  postsDetailedLoading: boolean;
  postsDetailedError: string | null;
  favorites: number[];
}

const initialState: PostsState = {
  favorites: getInitialFavorites(),
  posts: [],
  postsDetailed: [],
  postsDetailedLoading: true,
  postsDetailedError: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPostToFavorites: (state, action: PayloadAction<number>) => {
      state.favorites.push(action.payload);
      if (checkIsClientEnv()) {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removePostFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (postId) => postId !== action.payload
      );
      if (checkIsClientEnv()) {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
  },
  extraReducers: (builder) => {
    builder
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

export const { setPosts, addPostToFavorites, removePostFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;
