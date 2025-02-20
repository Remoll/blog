import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import postsReducer from "./slices/postsSlice";
import filtersReducer from "./slices/filtersSlice";
import sorterReducer from "./slices/sorterSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    posts: postsReducer,
    filters: filtersReducer,
    sorter: sorterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
