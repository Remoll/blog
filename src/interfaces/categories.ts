enum CategoryKey {
  knowledge = "knowledge",
  inspirations = "inspirations",
  interpretations = "interpretations",
  accessible = "accessible",
}

enum CategoryTextColor {
  white = "white",
  black = "black",
}

interface CategoryCardAttributes {
  backgroundImgSrc: string;
  textColor: CategoryTextColor;
  label: string;
  iconSrc: string;
  key: CategoryKey;
}

export { type CategoryCardAttributes, CategoryTextColor, CategoryKey };
