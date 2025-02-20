import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialFavorites = (): string[] => {
  if (typeof window !== "undefined") {
    const jsonFavorites = localStorage.getItem("favorites");
    if (!jsonFavorites) {
      return [];
    }
    return JSON.parse(jsonFavorites);
  }
  return [];
};

interface PostsState {
  favorites: string[];
}

const initialState: PostsState = {
  favorites: getInitialFavorites(),
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);

      if (typeof window !== "undefined") {
        const jsonFavorites = JSON.stringify(state.favorites);
        localStorage.setItem("favorites", jsonFavorites);
      }
    },
    removePostFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (postId) => postId !== action.payload
      );

      if (typeof window !== "undefined") {
        const jsonFavorites = JSON.stringify(state.favorites);
        localStorage.setItem("favorites", jsonFavorites);
      }
    },
  },
});

export const { addPostToFavorites, removePostFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;
