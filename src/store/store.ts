import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice/categoriesSlice";
import postsReducer from "./slices/postsSlice/postsSlice";
import filtersReducer from "./slices/filtersSlice/filtersSlice";
import sorterReducer from "./slices/sorterSlice/sorterSlice";
import deviceReducer from "./slices/deviceSlice/deviceSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    posts: postsReducer,
    filters: filtersReducer,
    sorter: sorterReducer,
    device: deviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
