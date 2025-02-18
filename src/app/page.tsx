import PostList from "@/components/posts/PostsList";
import CategoriesSlider from "@/components/categories/CategoriesSlider";

const Home = () => {
  return (
    <>
      <h1>Blog edukacyjny</h1>
      <CategoriesSlider />
      <PostList />
    </>
  );
};

export default Home;
