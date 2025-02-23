"use client";
import { globalPaddingClasses } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import { FetchResponse } from "@/interfaces/common";
import { toast } from "react-toastify";
import PostPreview from "./PostPreview";

interface PostResolverProps {
  fetchPostResponse: FetchResponse<Post>;
}

const PostsPreviewResolver = ({ fetchPostResponse }: PostResolverProps) => {
  const { data, error } = fetchPostResponse;

  if (error || !data) {
    toast.error("Błąd pobierania posta");
    console.error(error);
    return <h1 className={`${globalPaddingClasses}`}>Błąd pobierania posta</h1>;
  }

  return <PostPreview post={data} />;
};

export default PostsPreviewResolver;
