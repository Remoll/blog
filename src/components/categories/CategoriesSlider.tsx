import Slider from "@/components/ui/slider/Slider";
import { categoriesList } from "./consts";
import CategoryCard from "./CategoryCard";

const CategoriesSlider = () => {
  return (
    <div className="bg-custom-gray py-4">
      <Slider>
        {categoriesList.map((category) => (
          <CategoryCard key={category.label} category={category} />
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesSlider;
