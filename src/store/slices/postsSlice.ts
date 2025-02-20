import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  favorites: number[];
}

const initialState: PostsState = {
  favorites: getInitialFavorites(),
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
});

export const { addPostToFavorites, removePostFromFavorites } =
  postsSlice.actions;
export default postsSlice.reducer;
