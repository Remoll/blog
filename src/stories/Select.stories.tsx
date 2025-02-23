import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select from "@/components/ui/select/Select";

const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "popular", label: "Most Popular" },
];

export default {
  title: "UI/Select",
  component: Select,
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    options: { control: "object" },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange(newValue);
      }}
      options={options}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  label: "Sort by:",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  value: "",
};
