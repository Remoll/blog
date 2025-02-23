import {
  CategoryCardAttributes,
  CategoryTextColor,
  CategoryKey,
} from "@/interfaces/categories";
import translations from "@/locates/pl/translations.json";

const categoryLabels: Record<CategoryKey, string> = {
  [CategoryKey.knowledge]: translations["knowledge"],
  [CategoryKey.inspirations]: translations["inspirations"],
  [CategoryKey.interpretations]: translations["interpretations"],
  [CategoryKey.accessible]: translations["accessible"],
};

const categoriesList: CategoryCardAttributes[] = [
  {
    backgroundImgSrc: "/books.jpg",
    textColor: CategoryTextColor.white,
    label: categoryLabels[CategoryKey.knowledge],
    iconSrc: "/book.svg",
    key: CategoryKey.knowledge,
  },
  {
    backgroundImgSrc: "/antique-painting.jpg",
    textColor: CategoryTextColor.black,
    label: categoryLabels[CategoryKey.inspirations],
    iconSrc: "/idea.svg",
    key: CategoryKey.inspirations,
  },
  {
    backgroundImgSrc: "/scribe.jpg",
    textColor: CategoryTextColor.white,
    label: categoryLabels[CategoryKey.interpretations],
    iconSrc: "/painting.svg",
    key: CategoryKey.interpretations,
  },
  {
    backgroundImgSrc: "/city.jpg",
    textColor: CategoryTextColor.black,
    label: categoryLabels[CategoryKey.accessible],
    iconSrc: "/glasses.svg",
    key: CategoryKey.accessible,
  },
];

const categoryBgColorClasses: Record<CategoryKey, string> = {
  [CategoryKey.interpretations]: "bg-red-600",
  [CategoryKey.inspirations]: "bg-yellow-600",
  [CategoryKey.knowledge]: "bg-blue-600",
  [CategoryKey.accessible]: "bg-green-600",
};

const categoryTextColorClasses: Record<CategoryKey, string> = {
  [CategoryKey.interpretations]: "text-red-600",
  [CategoryKey.inspirations]: "text-yellow-600",
  [CategoryKey.knowledge]: "text-blue-600",
  [CategoryKey.accessible]: "text-green-600",
};

const categoryBorderColorClasses: Record<CategoryKey, string> = {
  [CategoryKey.interpretations]: "border-red-700",
  [CategoryKey.inspirations]: "border-yellow-700",
  [CategoryKey.knowledge]: "border-blue-700",
  [CategoryKey.accessible]: "border-green-700",
};

const textClasses: Record<CategoryTextColor, string> = {
  [CategoryTextColor.white]: "text-white",
  [CategoryTextColor.black]: "text-[#414042]",
};

export {
  categoriesList,
  textClasses,
  categoryLabels,
  categoryBgColorClasses,
  categoryBorderColorClasses,
  categoryTextColorClasses,
};
