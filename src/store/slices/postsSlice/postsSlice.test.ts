import { describe, it, expect } from "vitest";
import reducer, {
  setPosts,
  addPostToFavorites,
  removePostFromFavorites,
} from "./postsSlice";
import { Post } from "@/interfaces/posts";
import { CategoryKey } from "@/interfaces/categories";

interface PostsState {
  posts: Post[];
  favorites: number[];
}

const initialState: PostsState = {
  posts: [],
  favorites: [],
};

describe("postsSlice", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setPosts", () => {
    const posts: Post[] = [
      {
        id: 1,
        title: "Post1",
        body: "",
        createDate: "",
        category: CategoryKey.accessible,
        description: "",
        imageUrl: "",
        userId: 1,
      },
    ];
    const action = { type: setPosts.type, payload: posts };
    const actual = reducer(initialState, action);
    expect(actual.posts).toEqual(posts);
  });

  it("should handle addPostToFavorites", () => {
    const actual = reducer(initialState, addPostToFavorites(1));
    expect(actual.favorites).toEqual([1]);
  });

  it("should handle removePostFromFavorites", () => {
    const stateWithFavorites = { ...initialState, favorites: [1, 2, 3] };
    const actual = reducer(stateWithFavorites, removePostFromFavorites(2));
    expect(actual.favorites).toEqual([1, 3]);
  });
});
