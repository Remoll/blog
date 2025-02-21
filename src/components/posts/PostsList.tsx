"use client";
import useFetchPostsList from "@/hooks/posts/useFetchPostsList";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { filterPosts, sortPosts } from "./utils";

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

  const postSorterValue = useSelector(
    (state: RootState) => state.sorter.postSorter
  );

  const filteredPosts = filterPosts(
    posts,
    currentCategoryFilter,
    isFavoritesFilterActive,
    favoritesPosts
  );

  const sortedPosts = sortPosts(filteredPosts, postSorterValue);

  return loading ? (
    <h1>Pobieranie postów...</h1>
  ) : (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sortedPosts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
