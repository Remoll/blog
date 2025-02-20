"use client";
import useFetchPostsList from "@/hooks/useFetchPostsList";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { filterPosts } from "./utils";

const PostList = () => {
  const { posts, loading } = useFetchPostsList();

  const currentCategoryFilter = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const isFavoritesFilterActive = useSelector(
    (state: RootState) => state.filters.isFavoritesFilterActive
  );

  const favoritesPosts = useSelector(
    (state: RootState) => state.posts.favorites
  );

  const filteredPosts = filterPosts(
    posts,
    currentCategoryFilter,
    isFavoritesFilterActive,
    favoritesPosts
  );

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
