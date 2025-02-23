"use client";
import { globalPaddingClasses } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import { FetchResponse } from "@/interfaces/common";
import PostsList from "./PostsList";
import { toast } from "react-toastify";
import translations from "@/locates/pl/translations.json";

interface PostsListResolverProps {
  fetchPostsResponse: FetchResponse<Post[]>;
}

const PostsListResolver = ({ fetchPostsResponse }: PostsListResolverProps) => {
  const { data, error } = fetchPostsResponse;

  if (error || !data) {
    toast.error(translations["errorPostsFetch"]);
    console.error(error);
    return (
      <h1 className={`${globalPaddingClasses}`}>
        {translations["errorPostsFetch"]}
      </h1>
    );
  }

  if (data.length < 1) {
    toast.error(translations["errorPostsEmpty"]);
  }

  return <PostsList initialPosts={data} />;
};

export default PostsListResolver;
