export interface Author {
  bio: string;
  following: boolean;
  image: string;
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
  tagList: string[];
  title: string;
  updatedAt: string;
  isEditArticle?: boolean;
}

export interface ArticleInParams {
  route: {
    params: {
      article: Article;
    };
  };
}

export interface ArticleResponse {
  article: Article;
}

export interface MyArticles {
  articles: Article[];
  articlesCount: number;
}
