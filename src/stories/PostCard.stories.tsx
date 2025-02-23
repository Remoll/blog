import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Post } from "@/interfaces/posts";
import rootReducer from "@/store/store";
import PostCard from "@/components/posts/PostCard";
import { CategoryKey } from "@/interfaces/categories";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    device: { isMobile: false },
  },
});

export default {
  title: "Posts/PostCard",
  component: PostCard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: StoryFn<{ post: Post }> = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  post: {
    id: 1,
    title: "Sample Post Title",
    description: "This is a sample post description.",
    createDate: "2025-02-23T10:00:00Z",
    category: CategoryKey.accessible,
    userId: 1,
    body: "",
    imageUrl: "",
  },
};
