"use client";
import Slider from "@/components/ui/slider/Slider";
import getCategories from "./getCategories";

const CategoriesSlider = () => {
  return <Slider>{getCategories()}</Slider>;
};

export default CategoriesSlider;
