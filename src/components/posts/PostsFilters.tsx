import CategoryFilter from "../ui/filters/CategoryFilter";
import FavoritesFilter from "../ui/filters/FavoritesFilter";
import PostSorter from "../ui/sorter/PostsSorter";

const PostsFilters = () => {
  return (
    <>
      <FavoritesFilter />
      <CategoryFilter />
      <PostSorter />
    </>
  );
};

export default PostsFilters;
