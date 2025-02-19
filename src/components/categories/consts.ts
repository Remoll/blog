import {
  CategoryCardAttributes,
  CategoryBackgroundColor,
  CategoryTextColor,
} from "@/interfaces/categories";

const categoriesList: CategoryCardAttributes[] = [
  {
    backgroundImgSrc: "/books.jpg",
    backgroundColor: CategoryBackgroundColor.blue,
    textColor: CategoryTextColor.white,
    label: "Wiedza",
    iconSrc: "/book.svg",
    key: "knowledge",
  },
  {
    backgroundImgSrc: "/antique-painting.jpg",
    backgroundColor: CategoryBackgroundColor.yellow,
    textColor: CategoryTextColor.black,
    label: "Inspiracje",
    iconSrc: "/idea.svg",
    key: "inspirations",
  },
  {
    backgroundImgSrc: "/scribe.jpg",
    backgroundColor: CategoryBackgroundColor.red,
    textColor: CategoryTextColor.white,
    label: "Interpretacje",
    iconSrc: "/painting.svg",
    key: "interpretations",
  },
  {
    backgroundImgSrc: "/city.jpg",
    backgroundColor: CategoryBackgroundColor.green,
    textColor: CategoryTextColor.black,
    label: "Dostępne",
    iconSrc: "/glasses.svg",
    key: "accessible",
  },
];

const bgClasses: Record<CategoryBackgroundColor, string> = {
  [CategoryBackgroundColor.red]: "bg-red-600",
  [CategoryBackgroundColor.yellow]: "bg-yellow-600",
  [CategoryBackgroundColor.blue]: "bg-blue-600",
  [CategoryBackgroundColor.green]: "bg-green-600",
};

const borderColorClasses: Record<CategoryBackgroundColor, string> = {
  [CategoryBackgroundColor.red]: "border-red-700",
  [CategoryBackgroundColor.yellow]: "border-yellow-700",
  [CategoryBackgroundColor.blue]: "border-blue-700",
  [CategoryBackgroundColor.green]: "border-green-700",
};

const textClasses: Record<CategoryTextColor, string> = {
  [CategoryTextColor.white]: "text-white",
  [CategoryTextColor.black]: "text-[#414042]",
};

export { categoriesList, bgClasses, borderColorClasses, textClasses };
