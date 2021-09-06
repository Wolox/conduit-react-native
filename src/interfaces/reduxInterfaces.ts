import { Dispatch, ReactNode } from 'react';
import { ApiOkResponse, ApiErrorResponse } from 'apisauce';
import { UserResponse } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { PaginatedList } from '@interfaces/miscelanious';

import { Article, ArticleResponse, MyArticles } from './articlesInterface';

export interface Action<T = null, P = null, K = null> {
  [key: string]: any;
  type: string;
  target?: string;
  payload?: T;
  key?: string;
  index?: number;
  service?: Function;
  injections?: any[];
  successSelector?: (response: ApiOkResponse<P>) => K;
  failureSelector?: (response: ApiErrorResponse<P>) => K;
}

export type DispatcheableAction<T = null, P = null, K = null> = (
  dispatch: Dispatch<Action<T, P, K>>,
  getState: () => State
) => void;

export interface AuthState {
  initialLoading: boolean;
  currentUser: Nullable<UserResponse>;
  currentUserLoading: boolean;
  currentUserError: Nullable<string>;
  hasAccessOnBoarding: boolean;
}
export interface MyArticlesState {
  myArticles: {
    articles: [];
  };
  myArticlesLoading: boolean;
  myArticlesError: Nullable<string>;
}

export interface ArtcileAction extends PaginatedList<Article> {}
export interface ArticlesState {
  articlesList: Nullable<ArtcileAction>;
  articlesListLoading: boolean;
  articlesListError: Nullable<String>;
  myArticlesList: MyArticles;
  myArticlesListLoading: boolean;
  myArticlesListError: Nullable<String>;
  createArticle: Nullable<ArticleResponse>;
  createArticleLoading: boolean;
  createArticleError: Nullable<String>;
  deleteArticle: Nullable<String>;
  deleteArticleLoading: boolean;
  deleteArticleError: Nullable<String>;
}
export interface FavouritesState {
  favoritesArticlesList: {
    articles: [];
  };
  favoritesArticlesListLoading: boolean;
  favoritesArticlesListError: Nullable<string>;
}

export interface CommentsState {
  comments: [];
  commentLoading: boolean;
  commentsError: Nullable<string>;
}
export interface FullScreenModal {
  data: ReactNode;
  onPressOut?: () => void;
  noCanClose?: boolean;
}
export interface FeedBackState {
  modal: Nullable<FullScreenModal>;
}
export interface State {
  auth: AuthState;
  articles: ArticlesState;
  comments: CommentsState;
  favourites: FavouritesState;
  myArticles: MyArticlesState;
  feedBack: FeedBackState;
}

export interface ReduxObject {
  getState: () => State;
}
