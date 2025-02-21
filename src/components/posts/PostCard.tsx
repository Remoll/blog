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
    <article className="bg-custom-gray rounded-tl-card-md rounded-br-card-md min-h-full py-12 px-8">
      <header>
        <p className="font-opensans">{categoryLabel}</p>
        <h2 className="font-playfair">{post.title}</h2>
      </header>
      <time className="font-playfair" dateTime={post.createDate}>
        {createdDate}
      </time>
      <p>{post.description}</p>
      <Link href={{ pathname: `/${post.id}` }} className="flex items-center">
        zobacz więcej <FaArrowRight />
      </Link>
    </article>
  );
};

export default PostCard;
