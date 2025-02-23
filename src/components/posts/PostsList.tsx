"use client";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { filterPosts, sortPosts } from "./utils";
import { useEffect } from "react";
import { fetchPosts } from "@/store/slices/postsSlice";

const PostList = () => {
  const currentCategoryFilter = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const isFavoritesFilterActive = useSelector(
    (state: RootState) => state.filters.isFavoritesFilterActive
  );

  const {
    favorites: favoritesPosts,
    posts,
    postsLoading: loading,
    postsError: error,
  } = useSelector((state: RootState) => state.posts);

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

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  if (loading) return <h1>Pobieranie postów...</h1>;
  if (error) return <p>Błąd: {error}</p>;

  return (
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
