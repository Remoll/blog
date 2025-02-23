import checkIsClientEnv from "@/utils/checkIsClientEnv.ts/checkIsClientEnv";
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = (): boolean => {
  if (checkIsClientEnv()) {
    const localStorageValue = localStorage.getItem("isFavoritesFilterActive");

    if (!localStorageValue) {
      return false;
    }

    const isFavoritesFilterActive = JSON.parse(localStorageValue);

    return isFavoritesFilterActive;
  }
  return false;
};

interface FiltersState {
  isFavoritesFilterActive: boolean;
}

const initialState: FiltersState = {
  isFavoritesFilterActive: getInitialState(),
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    activeFavotiresFilter: (state) => {
      state.isFavoritesFilterActive = true;
      if (checkIsClientEnv()) {
        const json = JSON.stringify(true);
        localStorage.setItem("isFavoritesFilterActive", json);
      }
    },
    disableFavotiresFilter: (state) => {
      state.isFavoritesFilterActive = false;
      if (checkIsClientEnv()) {
        const json = JSON.stringify(false);
        localStorage.setItem("isFavoritesFilterActive", json);
      }
    },
  },
});

export const { activeFavotiresFilter, disableFavotiresFilter } =
  filtersSlice.actions;
export default filtersSlice.reducer;
