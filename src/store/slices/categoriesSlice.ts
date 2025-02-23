import { CategoryKey } from "@/interfaces/categories";
import checkIsClientEnv from "@/utils/checkIsClientEnv.ts/checkIsClientEnv";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const categoryLocalStorageKey = "category";

const getInitialCategory = (): CategoryKey | "" => {
  if (checkIsClientEnv()) {
    return (
      (localStorage.getItem(
        categoryLocalStorageKey
      ) as unknown as CategoryKey) || ""
    );
  }
  return "";
};

interface CategoriesState {
  currentCategory: CategoryKey | "";
}

const initialState: CategoriesState = {
  currentCategory: getInitialCategory(),
};

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryKey | "">) => {
      state.currentCategory = action.payload;
      if (checkIsClientEnv()) {
        localStorage.setItem(categoryLocalStorageKey, action.payload as string);
      }
    },
    clearCategory: (state) => {
      state.currentCategory = "";
      if (checkIsClientEnv()) {
        localStorage.setItem(categoryLocalStorageKey, "");
      }
    },
  },
});

export const { setCategory, clearCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
