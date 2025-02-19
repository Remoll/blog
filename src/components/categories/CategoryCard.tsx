import Image from "next/image";
import {
  CategoryCardAttributes,
  CategoryBackgroundColor,
  CategoryTextColor,
} from "./type";

interface CategoryCardProps {
  category: CategoryCardAttributes;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { backgroundImgSrc, backgroundColor, textColor, label, iconSrc } =
    category;

  const bgClasses: Record<CategoryBackgroundColor, string> = {
    [CategoryBackgroundColor.red]: "bg-red-600",
    [CategoryBackgroundColor.yellow]: "bg-yellow-600",
    [CategoryBackgroundColor.blue]: "bg-blue-600",
    [CategoryBackgroundColor.green]: "bg-green-600",
  };

  const textClasses: Record<CategoryTextColor, string> = {
    [CategoryTextColor.white]: "text-white",
    [CategoryTextColor.black]: "text-[#414042]",
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-tl-card-md rounded-br-card-md h-[433px]">
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
