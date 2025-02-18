import Slider from "@/components/ui/Slider";
import { categoriesList } from "./consts";
import CategoryCard from "./CategoryCard";

const CategoriesSlider = () => {
  return (
    <Slider>
      {categoriesList.map((category) => (
        <CategoryCard key={category.label} category={category} />
      ))}
    </Slider>
  );
};

export default CategoriesSlider;
