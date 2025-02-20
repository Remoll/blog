import { Post } from "@/interfaces/posts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-custom-gray rounded-tl-card-md rounded-br-card-md py-[51.615px] px-[35px]">
      <p>{post.category}</p>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link href={{ pathname: `/${post.id}` }} className="flex items-center">
        zobacz więcej <FaArrowRight />
      </Link>
    </div>
  );
};

export default PostCard;
