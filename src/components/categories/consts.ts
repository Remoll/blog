import { CategoryCardAttributes, CategoryColor } from "./type";

const categoriesList: CategoryCardAttributes[] = [
  {
    backgroundImgSrc: "/books.jpg",
    color: CategoryColor.blue,
    label: "Wiedza",
    iconSrc: "/book.svg",
  },
  {
    backgroundImgSrc: "/antique-painting.jpg",
    color: CategoryColor.yellow,
    label: "Inspiracje",
    iconSrc: "/idea.svg",
  },
  {
    backgroundImgSrc: "/scribe.jpg",
    color: CategoryColor.red,
    label: "Interpretacje",
    iconSrc: "/painting.svg",
  },
  {
    backgroundImgSrc: "/city.jpg",
    color: CategoryColor.green,
    label: "Dostępne",
    iconSrc: "/glasses.svg",
  },
];

export { categoriesList };
