import Image from "next/image";
import { CategoryCardAttributes } from "./type";
import { bgClasses, borderColorClasses, textClasses } from "./consts";
import { useEffect, useState } from "react";

interface CategoryCardProps {
  category: CategoryCardAttributes;
  currentCategoryFilter: string;
  handleSetCategoryFilter: (key: string) => void;
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

  const { backgroundImgSrc, backgroundColor, textColor, label, iconSrc, key } =
    category;

  const borderClass = `border-[6px] ${borderColorClasses[backgroundColor]}`;

  const isCategorySelected = currentCategoryFilter === key;

  return (
    <div
      onClick={() => handleSetCategoryFilter(key)}
      className={`flex flex-col overflow-hidden rounded-tl-card-md rounded-br-card-md h-[433px] ${
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
        className={`${bgClasses[backgroundColor]} flex flex-col flex-1 items-center justify-center`}
      >
        <p className={`${textClasses[textColor]} uppercase pb-3 font-bold`}>
          {label}
        </p>
        <Image src={iconSrc} alt="Logo" width={53} height={53} />
      </div>
    </div>
  );
};

export default CategoryCard;
