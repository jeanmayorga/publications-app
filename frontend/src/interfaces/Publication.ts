import { Author } from "./Author";

export interface Publication {
  id: number;
  authorId: number;
  title: string;
  body: string;
  createdAt: string;
  author: Author;
}
