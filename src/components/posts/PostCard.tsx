import { Post } from "@/interfaces/posts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { categoryLabels, categoryTextColorClasses } from "../categories/consts";
import formatDate from "@/utils/formatDate/formatDate";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import translations from "@/locates/pl/translations.json";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const isMobile = useSelector((state: RootState) => state.device.isMobile);

  const categoryLabel = categoryLabels[post.category];
  const createdDate = formatDate(post.createDate);

  const handleLinkClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <article className="bg-gray-300 text-secondary rounded-tl-card-md rounded-br-card-md min-h-full py-12 px-8">
      <header>
        {!isMobile && (
          <p
            className={`${
              categoryTextColorClasses[post.category]
            } font-opensans italic uppercase underline font-semibold text-xs pb-3`}
          >
            {categoryLabel}
          </p>
        )}
        <h2 className="font-playfair font-black text-5xl leading-loose pb-4">
          {post.title}
        </h2>
        {isMobile && (
          <div className="border-b border-secondary w-[5rem] mb-3" />
        )}
      </header>
      <time
        className="font-playfair text-2xl font-bold"
        dateTime={post.createDate}
      >
        {createdDate}
      </time>
      <p className="font-opensans text-base leading-base py-4">
        {post.description}
      </p>
      <Link
        href={{ pathname: `/${post.id}` }}
        className="flex items-center"
        onClick={handleLinkClick}
      >
        <span className="font-bold text-base pr-3">
          {translations["seeMore"]}
        </span>
        <FaArrowRight />
      </Link>
    </article>
  );
};

export default PostCard;
