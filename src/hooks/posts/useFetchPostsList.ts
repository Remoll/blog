import { Post } from "@/interfaces/posts";
import { postsURL } from "./consts";
import useFetchData from "../useFetchData";

const useFetchPosts = () => {
  const { data, loading } = useFetchData<Post[]>(postsURL);
  return { posts: data || [], loading };
};

export default useFetchPosts;
