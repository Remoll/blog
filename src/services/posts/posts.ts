import { postsURL } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import fetchData from "../fetchData";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const postUrl = baseUrl + postsURL;

const fetchPost = async (postId: number) => {
  return await fetchData<Post>(`${postUrl}/${postId}`);
};

const fetchPostsList = async () => {
  return await fetchData<Post[]>(postUrl);
};

export { fetchPost, fetchPostsList };
