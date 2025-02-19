enum CategoryKey {
  knowledge,
  inspirations,
  interpretations,
  accessible,
}

enum CategoryBackgroundColor {
  blue,
  yellow,
  red,
  green,
}

enum CategoryTextColor {
  white,
  black,
}

interface CategoryCardAttributes {
  backgroundImgSrc: string;
  backgroundColor: CategoryBackgroundColor;
  textColor: CategoryTextColor;
  label: string;
  iconSrc: string;
  key: CategoryKey;
}

export {
  type CategoryCardAttributes,
  CategoryBackgroundColor,
  CategoryTextColor,
  CategoryKey,
};
