import { ImageSourcePropType } from 'react-native';

export interface Author {
  bio: string;
  following: boolean;
  image: ImageSourcePropType;
  username: string;
}

export interface Article {
  author: Author;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  /* tagList: []; */
  title: string;
  updatedAt: string;
}
