"use client";
import { globalPaddingClasses } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import { FetchResponse } from "@/interfaces/common";
import { toast } from "react-toastify";
import PostPreview from "./PostPreview";
import translations from "@/locates/pl/translations.json";

interface PostResolverProps {
  fetchPostResponse: FetchResponse<Post>;
}

const PostsPreviewResolver = ({ fetchPostResponse }: PostResolverProps) => {
  const { data, error } = fetchPostResponse;

  if (error || !data) {
    toast.error(translations["errorPostFetch"]);
    console.error(error);
    return (
      <h1 className={`${globalPaddingClasses}`}>
        {translations["errorPostFetch"]}
      </h1>
    );
  }

  return <PostPreview post={data} />;
};

export default PostsPreviewResolver;
