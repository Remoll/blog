import { postsURL } from "./consts";
import useFetchData from "./useFetchData";
import { getPostsListWithMockupMissingData, RawPost } from "@/mocks/posts";

const useFetchPosts = () => {
  const { data, loading } = useFetchData<RawPost[]>(postsURL);
  const postsWithMissingData = getPostsListWithMockupMissingData(data);
  return { posts: postsWithMissingData, loading };
};

export default useFetchPosts;
