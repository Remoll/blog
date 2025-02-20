import { CategoryKey } from "@/interfaces/categories";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialCategory = (): CategoryKey | "" => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("category") as unknown as CategoryKey) || "";
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
      if (typeof window !== "undefined") {
        localStorage.setItem("category", action.payload as string);
      }
    },
    clearCategory: (state) => {
      state.currentCategory = "";
      if (typeof window !== "undefined") {
        localStorage.setItem("category", "");
      }
    },
  },
});

export const { setCategory, clearCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
