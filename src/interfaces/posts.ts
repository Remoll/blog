import { CategoryKey } from "./categories";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
  category: CategoryKey;
  createDate: Date;
}

export type { Post };
