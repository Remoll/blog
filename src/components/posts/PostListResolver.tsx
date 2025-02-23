"use client";
import { globalPaddingClasses } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import { FetchResponse } from "@/interfaces/common";
import PostsList from "./PostsList";
import { toast } from "react-toastify";

interface PostsListResolverProps {
  fetchPostsResponse: FetchResponse<Post[]>;
}

const PostsListResolver = ({ fetchPostsResponse }: PostsListResolverProps) => {
  const { data, error } = fetchPostsResponse;

  if (error || !data) {
    toast.error("Błąd pobierania postów");
    console.error(error);
    return (
      <h1 className={`${globalPaddingClasses}`}>Błąd pobierania postów</h1>
    );
  }

  if (data.length < 1) {
    toast.error("Lista pobranych postów jest pusta");
  }

  return <PostsList initialPosts={data} />;
};

export default PostsListResolver;
