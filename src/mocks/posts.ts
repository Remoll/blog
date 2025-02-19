import { CategoryKey } from "@/interfaces/categories";
import { Post } from "@/interfaces/posts";

interface RawPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const getRandomDate = () => {
  const startTime = new Date(2000, 0, 1).getTime();
  const endTime = new Date().getTime();
  const randomTime = startTime + Math.random() * (endTime - startTime);
  return new Date(randomTime);
};

const getRandomCategoryKey = (): CategoryKey => {
  const keys = Object.keys(CategoryKey).filter((key) =>
    isNaN(Number(key))
  ) as Array<keyof typeof CategoryKey>;
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex] as unknown as CategoryKey;
};

const getPostWithMockupMissingData = (
  rawPost: RawPost | undefined
): Post | undefined => {
  if (!rawPost) return rawPost;
  const newItem = {
    ...rawPost,
    category: getRandomCategoryKey(),
    createDate: getRandomDate(),
  };
  return newItem;
};

const getPostsListWithMockupMissingData = (
  rawPostsList: RawPost[] | undefined
): (Post | undefined)[] | undefined => {
  if (!rawPostsList) return rawPostsList;
  return rawPostsList.map((rawPost) => getPostWithMockupMissingData(rawPost));
};

export {
  type RawPost,
  getPostWithMockupMissingData,
  getPostsListWithMockupMissingData,
};
