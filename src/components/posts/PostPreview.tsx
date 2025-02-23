"use client";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  addPostToFavorites,
  removePostFromFavorites,
} from "@/store/slices/postsSlice/postsSlice";
import SafeHtml from "../ui/safeHtml/safeHtml";
import { globalPaddingClasses } from "@/consts/consts";
import Link from "next/link";
import { Post } from "@/interfaces/posts";

interface PostPreviewProps {
  post: Post;
}

const PostPreview = ({ post }: PostPreviewProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { favorites: favoritesPosts } = useSelector(
    (state: RootState) => state.posts
  );

  const isPostFavorive = favoritesPosts.includes(post.id);

  const setIsPostFavorite = () => {
    if (isPostFavorive) {
      dispatch(removePostFromFavorites(post.id));
    } else {
      dispatch(addPostToFavorites(post.id));
    }
  };

  const StarIcon = isPostFavorive ? FaStar : FaRegStar;

  return (
    <div className={`${globalPaddingClasses} max-w-[75rem]`}>
      <div className="flex flex-col md:flex-row justify-between pt-3">
        <Link href={{ pathname: `/` }} className={`flex items-center pb-6`}>
          <FaArrowLeft className="text-black" />
          <span className="text-7xl font-opensans font-bold pl-3">
            Blog Edukacyjny
          </span>
        </Link>
        <button
          onClick={() => setIsPostFavorite()}
          className="flex items-center pb-6"
        >
          <StarIcon size="2rem" className="text-gray-900" />
          <span className="text-xl font-opensans font-bold pl-3">
            {isPostFavorive ? "usuń z ulubionych" : "dodaj do ulubionych"}
          </span>
        </button>
      </div>
      <article>
        <header className="pb-6 text-black sm:text-primary">
          <h1 className="text-8xl leading-3xloose font-playfair font-bold pb-6">
            {post?.title}
          </h1>
          <p className="text-xs leading-normal font-opensans">
            {post?.description}
          </p>
        </header>
        <div className="pb-6 article-body">
          <SafeHtml html={post.body} />
        </div>
        <Image
          src={post?.imageUrl}
          alt="example-blog-photo"
          width={185}
          height={58}
          className="object-cover w-full h-[30rem] rounded-tl-card-lg rounded-br-card-lg pb-6"
        />
      </article>
    </div>
  );
};

export default PostPreview;
