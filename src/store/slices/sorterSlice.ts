import { SortOrder } from "@/interfaces/common";
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = (): SortOrder => {
  if (typeof window !== "undefined") {
    const localStorageValue = localStorage.getItem("postSorter");

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
      if (typeof window !== "undefined") {
        localStorage.setItem("postSorter", actions.payload);
      }
    },
  },
});

export const { setPostSorterValue } = sorterSlice.actions;
export default sorterSlice.reducer;
