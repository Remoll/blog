"use client";
import Image from "next/image";
import { CategoryCardAttributes, CategoryKey } from "@/interfaces/categories";
import {
  categoryBgColorClasses,
  categoryBorderColorClasses,
  textClasses,
} from "./consts";
import { useEffect, useState } from "react";

interface CategoryCardProps {
  category: CategoryCardAttributes;
  currentCategoryFilter: CategoryKey | null;
  handleSetCategoryFilter: (key: CategoryKey) => void;
}

const CategoryCard = ({
  category,
  currentCategoryFilter,
  handleSetCategoryFilter,
}: CategoryCardProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { backgroundImgSrc, textColor, label, iconSrc, key } = category;

  const borderClass = `border-[6px] ${categoryBorderColorClasses[key]}`;

  const isCategorySelected = currentCategoryFilter === key;

  return (
    <div
      onClick={() => handleSetCategoryFilter(key)}
      className={`flex flex-col overflow-hidden cursor-pointer rounded-tl-card-md rounded-br-card-md h-[27rem] ${
        isCategorySelected && borderClass
      }`}
    >
      <Image
        src={backgroundImgSrc}
        alt="Logo"
        width={185}
        height={58}
        className="object-cover w-full flex-1 h-[50%]"
      />
      <div
        className={`${categoryBgColorClasses[key]} flex flex-col flex-1 items-center justify-center`}
      >
        <p
          className={`${textClasses[textColor]} uppercase pb-3 font-bold text-3xl font-open-sans`}
        >
          {label}
        </p>
        <Image src={iconSrc} alt="Logo" width={53} height={53} />
      </div>
    </div>
  );
};

export default CategoryCard;
