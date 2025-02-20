import { CategoryKey } from "./categories";

interface Post {
  body: string;
  id: number;
  title: string;
  description: string;
  userId: number;
  category: CategoryKey;
  createDate: string;
  imageUrl: string;
}

export type { Post };
