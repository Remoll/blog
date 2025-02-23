import { categoriesList } from "./consts";
import CategoryCard from "./CategoryCard";
import { CategoryKey } from "@/interfaces/categories";
import { useDispatch, useSelector } from "react-redux";
import { clearCategory, setCategory } from "@/store/slices/categoriesSlice";
import { RootState } from "@/store/store";

const GetCategories = () => {
  const dispatch = useDispatch();
  const currentCategoryFilter = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const handleSetCategoryFilter = (selectedCategoryKey: CategoryKey) => {
    if (currentCategoryFilter === selectedCategoryKey) {
      dispatch(clearCategory());
    } else {
      dispatch(setCategory(selectedCategoryKey));
    }
  };
  return categoriesList.map((category) => (
    <CategoryCard
      key={category.label}
      category={category}
      currentCategoryFilter={currentCategoryFilter}
      handleSetCategoryFilter={handleSetCategoryFilter}
    />
  ));
};

export default GetCategories;
