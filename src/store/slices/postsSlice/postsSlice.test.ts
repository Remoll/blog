import { describe, it, expect } from "vitest";
import reducer, {
  addPostToFavorites,
  removePostFromFavorites,
  fetchPosts,
  fetchPostById,
} from "./postsSlice";
import { Post } from "@/interfaces/posts";
import { CategoryKey } from "@/interfaces/categories";

interface PostsState {
  posts: Post[];
  postsLoading: boolean;
  postsError: string | null;
  postsDetailed: Post[];
  postsDetailedLoading: boolean;
  postsDetailedError: string | null;
  favorites: number[];
}

const initialState: PostsState = {
  favorites: [],
  posts: [],
  postsLoading: true,
  postsError: null,
  postsDetailed: [],
  postsDetailedLoading: true,
  postsDetailedError: null,
};

describe("postsSlice", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
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

  describe("fetchPosts", () => {
    it("should handle fetchPosts.pending", () => {
      const action = { type: fetchPosts.pending.type };
      const actual = reducer(initialState, action);
      expect(actual.postsLoading).toBe(true);
      expect(actual.postsError).toBe(null);
    });

    it("should handle fetchPosts.fulfilled", () => {
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
      const action = { type: fetchPosts.fulfilled.type, payload: posts };
      const actual = reducer(initialState, action);
      expect(actual.postsLoading).toBe(false);
      expect(actual.posts).toEqual(posts);
    });

    it("should handle fetchPosts.rejected", () => {
      const action = {
        type: fetchPosts.rejected.type,
        payload: { error: "Error fetching posts" },
      };
      const actual = reducer(initialState, action);
      expect(actual.postsLoading).toBe(false);
      expect(actual.postsError).toBe("Error fetching posts");
    });
  });

  describe("fetchPostById", () => {
    it("should handle fetchPostById.pending", () => {
      const action = { type: fetchPostById.pending.type };
      const actual = reducer(initialState, action);
      expect(actual.postsDetailedLoading).toBe(true);
      expect(actual.postsDetailedError).toBe(null);
    });

    it("should handle fetchPostById.fulfilled", () => {
      const post: Post = {
        id: 1,
        title: "Post1",
        body: "",
        createDate: "",
        category: CategoryKey.accessible,
        description: "",
        imageUrl: "",
        userId: 1,
      };
      const action = { type: fetchPostById.fulfilled.type, payload: post };
      const actual = reducer(initialState, action);
      expect(actual.postsDetailedLoading).toBe(false);
      expect(actual.postsDetailed).toEqual([post]);
    });

    it("should handle fetchPostById.rejected", () => {
      const action = {
        type: fetchPostById.rejected.type,
        payload: { error: "Error fetching post" },
      };
      const actual = reducer(initialState, action);
      expect(actual.postsDetailedLoading).toBe(false);
      expect(actual.postsDetailedError).toBe("Error fetching post");
    });
  });
});
