import { Nullable } from '@interfaces/globalInterfaces';

export type ListKeyExtractor<T> = (item: T, index: number) => string;

export interface PaginatedList<T> {
  page: T[];
  nextPage: Nullable<number>;
  currentPage: number;
  totalCount: number;
}
