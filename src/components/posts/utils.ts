import { CategoryKey } from "@/interfaces/categories";
import { Post } from "@/interfaces/posts";

const filterPosts = (
  posts: (Post | undefined)[] | undefined,
  currentCategory: CategoryKey | "",
  isFavoritesFilterActive: boolean,
  favoritePostsIds: number[]
) => {
  if (!posts) {
    return [];
  }

  console.log("posts: ", posts);
  console.log("currentCategory: ", currentCategory);
  console.log("isFavoritesFilterActive: ", isFavoritesFilterActive);
  console.log("favoritePostsIds: ", favoritePostsIds);

  const categoryPosts = currentCategory
    ? posts?.filter((post) => {
        return post?.category === currentCategory;
      })
    : posts;

  console.log("categoryPosts: ", categoryPosts);
  if (!isFavoritesFilterActive) {
    return categoryPosts;
  }
  const favoritePosts = categoryPosts.filter((post) =>
    favoritePostsIds.includes(post.id)
  );
  console.log("favoritePosts: ", favoritePosts);

  return favoritePosts;
};

export { filterPosts };
