"use client";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { filterPosts, sortPosts } from "./utils";
import { useEffect, useState } from "react";
import PostsFilters from "./PostsFilters";
import Categories from "../categories/Categories";
import { globalPaddingClasses } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import { setPosts } from "@/store/slices/postsSlice/postsSlice";
import translations from "@/locates/pl/translations.json";

interface PostList {
  initialPosts: Post[];
}

const PostList = ({ initialPosts }: PostList) => {
  const currentCategoryFilter = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const dispatch = useDispatch<AppDispatch>();

  const { favorites: favoritesPosts, posts } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    if (posts.length === 0 && initialPosts?.length > 0) {
      dispatch(setPosts(initialPosts));
    }
  }, [dispatch, posts.length, initialPosts]);

  const isFavoritesFilterActive = useSelector(
    (state: RootState) => state.filters.isFavoritesFilterActive
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

  const [isRendered, setIsRendered] = useState(false);

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

  const somePostsExist = sortedPosts.length > 0;

  return (
    <>
      <h1
        className={`${globalPaddingClasses} pt-6 pb-12 font-bold text-6xl sm:text-7xl`}
      >
        {translations["educationalBlog"]}
      </h1>
      <Categories />
      <div className={`${globalPaddingClasses} pb-[30rem]`}>
        <PostsFilters />

        {somePostsExist ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedPosts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <h1>{translations["emptyPostsList"]}</h1>
        )}
      </div>
    </>
  );
};

export default PostList;
