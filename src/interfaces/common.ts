interface SelectOption {
  value: string;
  label: string;
}

enum SortOrder {
  newest = "newest",
  oldest = "oldest",
}

export { type SelectOption, SortOrder };
