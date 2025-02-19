"use client";
import Slider from "@/components/ui/slider/Slider";
import { categoriesList } from "./consts";
import CategoryCard from "./CategoryCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CategoryKey } from "@/interfaces/categories";

const CategoriesSlider = () => {
  const categoryLocalStorageKey = "category";

  const [currentCategoryFilter, setCurrentCategoryFilter] = useLocalStorage<
    CategoryKey | ""
  >(categoryLocalStorageKey, "");

  const handleSetCategoryFilter = (selectedCategoryKey: CategoryKey) => {
    if (currentCategoryFilter === selectedCategoryKey) {
      setCurrentCategoryFilter("");
    } else {
      setCurrentCategoryFilter(selectedCategoryKey);
    }
  };

  return (
    <div className="bg-custom-gray py-4">
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
