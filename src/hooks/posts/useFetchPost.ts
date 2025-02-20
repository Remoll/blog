import { postsURL } from "./consts";
import useFetchData from "../useFetchData";
import { Post } from "@/interfaces/posts";

const useFetchPosts = (id: number) => {
  const postUrl = `${postsURL}/${id}`;
  const { data, loading } = useFetchData<Post>(postUrl);
  return { post: data, loading };
};

export default useFetchPosts;
