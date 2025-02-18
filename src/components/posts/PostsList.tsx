"use client";
import useFetchPostsList from "@/hooks/useFetchPostsList";
import PostCard from "./PostCard";

const PostList = () => {
  const { posts, loading } = useFetchPostsList();
  return loading ? (
    <h1>Pobieranie postów...</h1>
  ) : (
    <ul className="flex flex-col gap-[56px]">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
