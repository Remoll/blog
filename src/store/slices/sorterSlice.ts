import { SortOrder } from "@/interfaces/common";
import checkIsClientEnv from "@/utils/checkIsClientEnv/checkIsClientEnv";
import { createSlice } from "@reduxjs/toolkit";

const postSorterLocalStorageKey = "postSorter";

const getInitialState = (): SortOrder => {
  if (checkIsClientEnv()) {
    const localStorageValue = localStorage.getItem(postSorterLocalStorageKey);

    if (!localStorageValue) {
      return SortOrder.newest;
    }

    return localStorageValue as SortOrder;
  }
  return SortOrder.newest;
};

interface SorterState {
  postSorter: SortOrder;
}

const initialState: SorterState = {
  postSorter: getInitialState(),
};

const sorterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPostSorterValue: (state, actions) => {
      state.postSorter = actions.payload;
      if (checkIsClientEnv()) {
        localStorage.setItem(postSorterLocalStorageKey, actions.payload);
      }
    },
  },
});

export const { setPostSorterValue } = sorterSlice.actions;
export default sorterSlice.reducer;
