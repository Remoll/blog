"use client";
import useFetchPostsList from "@/hooks/useFetchPostsList";
import PostCard from "./PostCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CategoryKey } from "@/interfaces/categories";

const PostList = () => {
  const { posts, loading } = useFetchPostsList();

  const categoryLocalStorageKey = "category";

  const [currentCategoryFilter] = useLocalStorage<CategoryKey | "">(
    categoryLocalStorageKey,
    ""
  );

  const filteredPosts =
    currentCategoryFilter === ""
      ? posts
      : posts?.filter((post) => post?.category === currentCategoryFilter);

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
