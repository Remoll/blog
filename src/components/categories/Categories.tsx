"use client";
import CategoriesSlider from "./CategoriesSlider";
import { globalPaddingClasses } from "@/consts/consts";
import CategoriesList from "./CategoriesList";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Categories = () => {
  const isMobile = useSelector((state: RootState) => state.device.isMobile);

  return (
    <div className={`bg-gray-300 pt-7 pb-12 ${globalPaddingClasses}`}>
      {isMobile ? <CategoriesSlider /> : <CategoriesList />}
    </div>
  );
};

export default Categories;
