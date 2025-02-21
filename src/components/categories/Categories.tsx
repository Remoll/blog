"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import CategoriesSlider from "./CategoriesSlider";
import { globalPaddingClasses, mobileBreakpoint } from "@/consts/consts";
import CategoriesList from "./CategoriesList";

const Categories = () => {
  const isMobile = useMediaQuery(mobileBreakpoint);

  return (
    <div className={`bg-custom-gray pt-7 pb-12 ${globalPaddingClasses}`}>
      {isMobile ? <CategoriesSlider /> : <CategoriesList />}
    </div>
  );
};

export default Categories;
