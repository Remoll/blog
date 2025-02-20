import { Post } from "@/interfaces/posts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { categoryLabels } from "../categories/consts";
import formatDate from "@/utils/formatData";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const categoryLabel = categoryLabels[post.category];
  const createdDate = formatDate(post.createDate);
  return (
    <div className="bg-custom-gray rounded-tl-card-md rounded-br-card-md py-[51.615px] px-[35px]">
      <p>{categoryLabel}</p>
      <h2>{post.title}</h2>
      <p>{createdDate}</p>
      <p>{post.description}</p>
      <Link href={{ pathname: `/${post.id}` }} className="flex items-center">
        zobacz więcej <FaArrowRight />
      </Link>
    </div>
  );
};

export default PostCard;
