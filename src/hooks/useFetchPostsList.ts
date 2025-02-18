import { postsURL } from "./consts";
import useFetchData from "./useFetchData";

const useFetchPosts = () => {
  const { data, loading } = useFetchData(postsURL);
  return { posts: data, loading };
};

export default useFetchPosts;
