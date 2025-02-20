import PostsList from "@/components/posts/PostsList";
import CategoriesSlider from "@/components/categories/CategoriesSlider";
import PostsFilters from "@/components/posts/PostsFilters";

const Home = () => {
  return (
    <>
      <h1>Blog edukacyjny</h1>
      <CategoriesSlider />
      <PostsFilters />
      <PostsList />
    </>
  );
};

export default Home;
