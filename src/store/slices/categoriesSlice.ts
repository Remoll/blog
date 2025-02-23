import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryKey } from "@/interfaces/categories";
import checkIsClientEnv from "@/utils/checkIsClientEnv/checkIsClientEnv";

const categoryLocalStorageKey = "category";

const getInitialCategory = (): CategoryKey | null => {
  if (checkIsClientEnv()) {
    return (
      (localStorage.getItem(categoryLocalStorageKey) as CategoryKey) || null
    );
  }
  return null;
};

interface CategoriesState {
  currentCategory: CategoryKey | null;
}

const initialState: CategoriesState = {
  currentCategory: getInitialCategory(),
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryKey>) => {
      state.currentCategory = action.payload;
      if (checkIsClientEnv()) {
        localStorage.setItem(categoryLocalStorageKey, action.payload);
      }
    },
    clearCategory: (state) => {
      state.currentCategory = null;
      if (checkIsClientEnv()) {
        localStorage.removeItem(categoryLocalStorageKey);
      }
    },
  },
});

export const { setCategory, clearCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
