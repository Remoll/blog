import { CategoryKey } from "@/interfaces/categories";
import { SortOrder } from "@/interfaces/common";
import { Post } from "@/interfaces/posts";

const filterPosts = (
  posts: Post[],
  currentCategory: CategoryKey | null,
  isFavoritesFilterActive: boolean,
  favoritePostsIds: number[]
): Post[] => {
  if (!posts) {
    return [];
  }

  const categoryPosts = currentCategory
    ? posts?.filter((post) => {
        return post?.category === currentCategory;
      })
    : posts;

  if (!isFavoritesFilterActive) {
    return categoryPosts;
  }
  const favoritePosts = categoryPosts.filter((post) =>
    favoritePostsIds.includes(post.id)
  );

  return favoritePosts;
};

const sortPosts = (posts: Post[], sortOrder: SortOrder) => {
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.createDate).getTime();
    const dateB = new Date(b.createDate).getTime();

    switch (sortOrder) {
      case SortOrder.newest: {
        return dateB - dateA;
      }
      case SortOrder.oldest: {
        return dateA - dateB;
      }
    }
  });

  return sortedPosts;
};

export { filterPosts, sortPosts };
