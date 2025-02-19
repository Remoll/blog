import { getPostWithMockupMissingData, RawPost } from "@/mocks/posts";
import { postsURL } from "./consts";
import useFetchData from "./useFetchData";

const useFetchPosts = (id: string) => {
  const postUrl = `${postsURL}/${id}`;
  const { data, loading } = useFetchData<RawPost>(postUrl);
  const postWithMissingData = getPostWithMockupMissingData(data);
  return { post: postWithMissingData, loading };
};

export default useFetchPosts;
