import checkIsClientEnv from "@/utils/checkIsClientEnv.ts/checkIsClientEnv";
import { createSlice } from "@reduxjs/toolkit";

const isFavoritesFilterActiveLocalStorageKey = "isFavoritesFilterActive";

const getInitialState = (): boolean => {
  if (checkIsClientEnv()) {
    const localStorageValue = localStorage.getItem(
      isFavoritesFilterActiveLocalStorageKey
    );

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
        localStorage.setItem(isFavoritesFilterActiveLocalStorageKey, json);
      }
    },
    disableFavotiresFilter: (state) => {
      state.isFavoritesFilterActive = false;
      if (checkIsClientEnv()) {
        const json = JSON.stringify(false);
        localStorage.setItem(isFavoritesFilterActiveLocalStorageKey, json);
      }
    },
  },
});

export const { activeFavotiresFilter, disableFavotiresFilter } =
  filtersSlice.actions;
export default filtersSlice.reducer;
