import { postsURL } from "@/hooks/posts/consts";
import { Post } from "@/interfaces/posts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getInitialFavorites = (): number[] => {
  if (typeof window !== "undefined") {
    const jsonFavorites = localStorage.getItem("favorites");
    if (!jsonFavorites) {
      return [];
    }

    const favoritesList = JSON.parse(jsonFavorites).map((id: string) =>
      parseInt(id)
    );

    return favoritesList;
  }
  return [];
};

interface PostsState {
  postsList: Post[];
  favorites: number[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  favorites: getInitialFavorites(),
  postsList: [],
  loading: true,
  error: null,
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
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.postsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.postsList = [];
        state.error = action.payload.error || "Error fetching posts";
      });
  },
});

export const { addPostToFavorites, removePostFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;
