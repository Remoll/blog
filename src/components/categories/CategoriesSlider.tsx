"use client";
import Slider from "@/components/ui/slider/Slider";
import { categoriesList } from "./consts";
import CategoryCard from "./CategoryCard";
import { CategoryKey } from "@/interfaces/categories";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "@/store/slices/categoriesSlice";
import { RootState } from "@/store/store";

const CategoriesSlider = () => {
  const dispatch = useDispatch();
  const currentCategoryFilter = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const handleSetCategoryFilter = (selectedCategoryKey: CategoryKey) => {
    if (currentCategoryFilter === selectedCategoryKey) {
      dispatch(setCategory(""));
    } else {
      dispatch(setCategory(selectedCategoryKey));
    }
  };

  return (
    <div className="bg-custom-gray pt-7 pb-12">
      <Slider>
        {categoriesList.map((category) => (
          <CategoryCard
            key={category.label}
            category={category}
            currentCategoryFilter={currentCategoryFilter}
            handleSetCategoryFilter={handleSetCategoryFilter}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesSlider;
