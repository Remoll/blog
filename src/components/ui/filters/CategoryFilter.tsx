"use client";
import {
  categoryTextColorClasses,
  categoryLabels,
} from "@/components/categories/consts";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { clearCategory } from "@/store/slices/categoriesSlice";
import { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();

  const currentCategoryFilter = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const categoryLabel =
    currentCategoryFilter && categoryLabels[currentCategoryFilter];

  return categoryLabel ? (
    <div className="flex items-center">
      <p
        className={`${categoryTextColorClasses[currentCategoryFilter]} underline uppercase font-bold pr-4 text-xs`}
      >
        {categoryLabel}
      </p>
      <button
        onClick={() => dispatch(clearCategory())}
        className="flex items-center text-xs"
      >
        <RxCross2 />
      </button>
    </div>
  ) : (
    <></>
  );
};

export default CategoryFilter;
