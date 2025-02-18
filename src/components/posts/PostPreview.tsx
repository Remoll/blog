"use client";
import useFetchPost from "@/hooks/useFetchPost";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface PostPreviewProps {
  id: string;
}

const PostPreview = ({ id }: PostPreviewProps) => {
  const { post, loading } = useFetchPost(id);
  return (
    <>
      <Link href="/" className="flex items-center">
        <FaArrowLeft /> Blog Edukacyjny
      </Link>
      {loading ? (
        <h1>Pobieranie posta...</h1>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Image
            src="/example-blog-photo.jpg"
            alt="example-blog-photo"
            width={185}
            height={58}
            className="object-cover w-full h-[574px] rounded-tl-card-lg rounded-br-card-lg"
          />
        </div>
      )}
    </>
  );
};

export default PostPreview;
