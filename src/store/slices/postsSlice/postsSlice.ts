import { Post } from "@/interfaces/posts";
import checkIsClientEnv from "@/utils/checkIsClientEnv.ts/checkIsClientEnv";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favoritesLocalStorageKey = "favorites";

const getInitialFavorites = (): number[] => {
  if (checkIsClientEnv()) {
    const jsonFavorites = localStorage.getItem(favoritesLocalStorageKey);
    if (!jsonFavorites) {
      return [];
    }
    return JSON.parse(jsonFavorites).map((id: string) => parseInt(id, 10));
  }
  return [];
};

interface PostsState {
  posts: Post[];
  favorites: number[];
}

const initialState: PostsState = {
  posts: [],
  favorites: getInitialFavorites(),
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
        localStorage.setItem(
          favoritesLocalStorageKey,
          JSON.stringify(state.favorites)
        );
      }
    },
    removePostFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (postId) => postId !== action.payload
      );
      if (checkIsClientEnv()) {
        localStorage.setItem(
          favoritesLocalStorageKey,
          JSON.stringify(state.favorites)
        );
      }
    },
  },
});

export const { setPosts, addPostToFavorites, removePostFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;
