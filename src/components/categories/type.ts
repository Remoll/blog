enum CategoryColor {
  blue,
  yellow,
  red,
  green,
}

interface CategoryCardAttributes {
  backgroundImgSrc: string;
  color: CategoryColor;
  label: string;
  iconSrc: string;
}

export { type CategoryCardAttributes, CategoryColor };
