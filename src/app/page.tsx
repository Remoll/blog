import PostsList from "@/components/posts/PostsList";
import Categories from "@/components/categories/Categories";
import PostsFilters from "@/components/posts/PostsFilters";
import { globalPaddingClasses } from "@/consts/consts";

const Home = () => {
  return (
    <>
      <h1
        className={`${globalPaddingClasses} pt-6 pb-12 font-bold text-6xl sm:text-7xl`}
      >
        Blog edukacyjny
      </h1>
      <Categories />
      <div className={globalPaddingClasses}>
        <PostsFilters />
        <PostsList />
      </div>
    </>
  );
};

export default Home;
