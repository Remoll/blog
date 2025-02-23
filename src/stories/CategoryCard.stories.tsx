import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CategoryKey } from "@/interfaces/categories";
import CategoryCard, {
  CategoryCardProps,
} from "@/components/categories/CategoryCard";
import { categoriesList } from "@/components/categories/consts";

export default {
  title: "Categories/CategoryCard",
  component: CategoryCard,
  argTypes: {
    category: { control: "object" },
    currentCategoryFilter: { control: "text" },
    handleSetCategoryFilter: { action: "setCategoryFilter" },
  },
} as Meta;

const Template: StoryFn<CategoryCardProps> = (args) => {
  const [currentCategoryFilter, setCurrentCategoryFilter] =
    useState<CategoryKey | null>(null);

  const handleSetCategoryFilter = (key: CategoryKey) => {
    console.log("currentCategoryFilter: ", currentCategoryFilter);
    if (currentCategoryFilter) {
      setCurrentCategoryFilter(null);
    } else {
      setCurrentCategoryFilter(key);
    }
  };

  return (
    <CategoryCard
      {...args}
      currentCategoryFilter={currentCategoryFilter}
      handleSetCategoryFilter={handleSetCategoryFilter}
    />
  );
};

export const Knowledge = Template.bind({});
Knowledge.args = {
  category: categoriesList[0],
};

export const Inspirations = Template.bind({});
Inspirations.args = {
  category: categoriesList[1],
};

export const Interpretations = Template.bind({});
Interpretations.args = {
  category: categoriesList[2],
};

export const Accessible = Template.bind({});
Accessible.args = {
  category: categoriesList[3],
};
