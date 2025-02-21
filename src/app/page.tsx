import PostsList from "@/components/posts/PostsList";
import CategoriesSlider from "@/components/categories/CategoriesSlider";
import PostsFilters from "@/components/posts/PostsFilters";

const Home = () => {
  return (
    <>
      <h1 className="pl-6 pt-6 font-bold text-6xl sm:text-7xl">
        Blog edukacyjny
      </h1>
      <CategoriesSlider />
      <div className="px-4 md:px-10 2xl:px-[5rem]">
        <PostsFilters />
        <PostsList />
      </div>
    </>
  );
};

export default Home;
