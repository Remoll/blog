import { postsURL } from "@/consts/consts";
import { Post } from "@/interfaces/posts";
import fetchData from "./fetchData";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const postUrl = baseUrl + postsURL;

const fetchPosts = async () => {
  return await fetchData<Post[]>(postUrl);
};

export { fetchPosts };
