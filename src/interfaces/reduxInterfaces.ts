import { Dispatch } from 'react';
import { ApiOkResponse, ApiErrorResponse } from 'apisauce';
import { CurrentUser } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { PaginatedList } from '@interfaces/miscelanious';

import { Article } from './articlesInterface';

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
  currentUser: Nullable<CurrentUser>;
  currentUserLoading: boolean;
  currentUserError: Nullable<string>;
  hasAccessOnBoarding: boolean;
}

export interface ArtcileAction extends PaginatedList<Article> {}
export interface ArticlesState {
  articlesList: Article[];
  articlesListLoading: boolean;
  articlesListError: Nullable<String>;
}

export interface State {
  auth: AuthState;
  articles: ArticlesState;
}

export interface ReduxObject {
  getState: () => State;
}
