import { Author } from '@interfaces/articlesInterface';

export interface iComment {
  author: Author;
  body: string;
  createdAt: string;
  updatedAt: string;
  id: number;
}
