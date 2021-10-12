import { Dispatch, ReactNode } from 'react';
import { ApiOkResponse, ApiErrorResponse } from 'apisauce';
import { ProfileData, UserResponse } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { PaginatedList } from '@interfaces/miscelanious';

import { Article, ArticleResponse, Author, MyArticles } from './articlesInterface';
import { iComment } from './commentInterfaces';

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
  userProfile: Nullable<ProfileData>;
  userProfileLoading: boolean;
  userProfileError: Nullable<string>;
}
export interface MyArticlesState {
  myArticles: {
    articles: [];
  };
  myArticlesLoading: boolean;
  myArticlesError: Nullable<string>;
}

export interface ProfileState {
  followUser: any;
  followUserLoading: boolean;
  followUserError: Nullable<string>;
  profileUser: {
    profile: Author;
  };
  profileUserLoading: boolean;
  profileUserError: Nullable<string>;
}

export interface ArtcileAction extends PaginatedList<Article> {}
export interface ArticlesState {
  articlesList: Nullable<ArtcileAction>;
  articlesListLoading: boolean;
  articlesListError: Nullable<String>;
  tagList: string[];
  tagListLoading: boolean;
  tagListError: Nullable<String>;
  selectedTags: string[];
  myArticlesList: MyArticles;
  myArticlesListLoading: boolean;
  myArticlesListError: Nullable<String>;
  createArticle: Nullable<ArticleResponse>;
  createArticleLoading: boolean;
  createArticleError: Nullable<String>;
  deleteArticle: Nullable<String>;
  deleteArticleLoading: boolean;
  deleteArticleError: Nullable<String>;
  updateArticle: Nullable<ArticleResponse>;
  updateArticleLoading: boolean;
  updateArticleError: Nullable<String>;
  articlesAuthor: {
    articles: [];
  };
  articlesAuthorLoading: boolean;
  articlesAuthorError: Nullable<string>;
  favoritedAuthor: {
    articles: [];
  };
  favoritedAuthorLoading: boolean;
  favoritedAuthorError: Nullable<string>;
  article: Nullable<Article>;
  articleLoading: boolean;
  articleError: Nullable<string>;
}
export interface FavouritesState {
  favoritesArticlesList: {
    articles: [];
  };
  favoritesArticlesListLoading: boolean;
  favoritesArticlesListError: Nullable<string>;
}

export interface CommentsState {
  comments: {
    comments: iComment[];
  };
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
  profile: ProfileState;
}

export interface ReduxObject {
  getState: () => State;
}
