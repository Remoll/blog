import { postsURL } from "./consts";
import useFetchData from "./useFetchData";

const useFetchPosts = (id: string) => {
  const postUrl = `${postsURL}/${id}`;
  const { data, loading } = useFetchData(postUrl);
  return { post: data, loading };
};

export default useFetchPosts;
