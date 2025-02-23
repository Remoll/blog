import { describe, it, expect } from "vitest";
import { filterPosts, sortPosts } from "./utils";
import { CategoryKey } from "@/interfaces/categories";
import { SortOrder } from "@/interfaces/common";
import { Post } from "@/interfaces/posts";

const posts: Post[] = [
  {
    id: 1,
    title: "Post 1",
    body: "Content 1",
    createDate: "2023-01-01",
    category: CategoryKey.accessible,
    description: "Description 1",
    imageUrl: "image1.jpg",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2",
    body: "Content 2",
    createDate: "2023-02-01",
    category: CategoryKey.inspirations,
    description: "Description 2",
    imageUrl: "image2.jpg",
    userId: 2,
  },
  {
    id: 3,
    title: "Post 3",
    body: "Content 3",
    createDate: "2023-03-01",
    category: CategoryKey.accessible,
    description: "Description 3",
    imageUrl: "image3.jpg",
    userId: 3,
  },
];

describe("filterPosts", () => {
  it("should return all posts if no category and favorites filter is inactive", () => {
    const result = filterPosts(posts, null, false, []);
    expect(result).toEqual(posts);
  });

  it("should filter posts by category", () => {
    const result = filterPosts(posts, CategoryKey.accessible, false, []);
    expect(result).toEqual([posts[0], posts[2]]);
  });

  it("should filter posts by favorites", () => {
    const result = filterPosts(posts, null, true, [1, 3]);
    expect(result).toEqual([posts[0], posts[2]]);
  });

  it("should filter posts by category and favorites", () => {
    const result = filterPosts(posts, CategoryKey.accessible, true, [1]);
    expect(result).toEqual([posts[0]]);
  });

  it("should return an empty array if no posts match the filters", () => {
    const result = filterPosts(posts, CategoryKey.accessible, true, [2]);
    expect(result).toEqual([]);
  });
});

describe("sortPosts", () => {
  it("should sort posts by newest first", () => {
    const result = sortPosts(posts, SortOrder.newest);
    expect(result).toEqual([posts[2], posts[1], posts[0]]);
  });

  it("should sort posts by oldest first", () => {
    const result = sortPosts(posts, SortOrder.oldest);
    expect(result).toEqual([posts[0], posts[1], posts[2]]);
  });
});
