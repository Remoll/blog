import {
  CategoryCardAttributes,
  CategoryBackgroundColor,
  CategoryTextColor,
} from "./type";

const categoriesList: CategoryCardAttributes[] = [
  {
    backgroundImgSrc: "/books.jpg",
    backgroundColor: CategoryBackgroundColor.blue,
    textColor: CategoryTextColor.white,
    label: "Wiedza",
    iconSrc: "/book.svg",
  },
  {
    backgroundImgSrc: "/antique-painting.jpg",
    backgroundColor: CategoryBackgroundColor.yellow,
    textColor: CategoryTextColor.black,
    label: "Inspiracje",
    iconSrc: "/idea.svg",
  },
  {
    backgroundImgSrc: "/scribe.jpg",
    backgroundColor: CategoryBackgroundColor.red,
    textColor: CategoryTextColor.white,
    label: "Interpretacje",
    iconSrc: "/painting.svg",
  },
  {
    backgroundImgSrc: "/city.jpg",
    backgroundColor: CategoryBackgroundColor.green,
    textColor: CategoryTextColor.black,
    label: "Dostępne",
    iconSrc: "/glasses.svg",
  },
];

export { categoriesList };
