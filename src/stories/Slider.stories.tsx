import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Slider from "@/components/ui/slider/Slider";

export default {
  title: "UI/Slider",
  component: Slider,
} as Meta;

const Template: StoryFn = (args) => (
  <Slider {...args}>
    <div className="bg-red-500 h-[100px]">Slide 1</div>
    <div className="bg-blue-500 h-[100px]">Slide 2</div>
    <div className="bg-yellow-500 h-[100px]">Slide 3</div>
  </Slider>
);

export const Default = Template.bind({});
