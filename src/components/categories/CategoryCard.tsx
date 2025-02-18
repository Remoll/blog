import Image from "next/image";
import { CategoryCardAttributes, CategoryColor } from "./type";

interface CategoryCardProps {
  category: CategoryCardAttributes;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { backgroundImgSrc, color, label, iconSrc } = category;

  const bgClasses: Record<CategoryColor, string> = {
    [CategoryColor.red]: "bg-red-600",
    [CategoryColor.yellow]: "bg-yellow-600",
    [CategoryColor.blue]: "bg-blue-600",
    [CategoryColor.green]: "bg-green-600",
  };

  return (
    <div className="flex flex-col px-3 overflow-hidden rounded-tl-card-md rounded-br-card-md">
      <Image
        src={backgroundImgSrc}
        alt="Logo"
        width={185}
        height={58}
        className="object-cover w-full flex-1"
      />
      <div className={`${bgClasses[color]} flex flex-col flex-1 items-center`}>
        <p className="uppercase">{label}</p>
        <Image src={iconSrc} alt="Logo" width={53} height={53} />
      </div>
    </div>
  );
};

export default CategoryCard;
