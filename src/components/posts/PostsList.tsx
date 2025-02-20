"use client";
import useFetchPostsList from "@/hooks/useFetchPostsList";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const PostList = () => {
  const { posts, loading } = useFetchPostsList();

  const currentCategoryFilter = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const filteredPosts =
    currentCategoryFilter === ""
      ? posts
      : posts?.filter((post) => {
          return post?.category === currentCategoryFilter;
        });

  return loading ? (
    <h1>Pobieranie postów...</h1>
  ) : (
    <ul className="flex flex-col gap-[56px]">
      {filteredPosts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
