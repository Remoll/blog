import CategoryFilter from "../ui/filters/CategoryFilter";
import FavoritesFilter from "../ui/filters/FavoritesFilter";

const PostsFilters = () => {
  return (
    <>
      <FavoritesFilter />
      <CategoryFilter />
    </>
  );
};

export default PostsFilters;
