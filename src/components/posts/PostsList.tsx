"use client";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { filterPosts, sortPosts } from "./utils";
import { useEffect, useState } from "react";
import { fetchPosts } from "@/store/slices/postsSlice/postsSlice";

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

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  useEffect(() => {
    if (isRendered) {
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      if (scrollPosition) {
        requestAnimationFrame(() => {
          window.scrollTo(0, parseInt(scrollPosition, 10));
          sessionStorage.removeItem("scrollPosition");
        });
      }
    }
  }, [isRendered]);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (loading) return <h1>Pobieranie postów...</h1>;
  if (error) return <h1>Błąd: {error}</h1>;
  if (sortedPosts.length < 1) return <h1>Nie znaleziono postów</h1>;

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
