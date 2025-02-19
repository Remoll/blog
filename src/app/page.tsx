import PostList from "@/components/posts/PostsList";
import CategoriesSlider from "@/components/categories/CategoriesSlider";
import FavoritesFilter from "@/components/ui/slider/filters/FavoritesFilter";

const Home = () => {
  return (
    <>
      <h1>Blog edukacyjny</h1>
      <CategoriesSlider />
      <FavoritesFilter />
      <PostList />
    </>
  );
};

export default Home;
