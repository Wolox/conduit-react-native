export const FIELDS = {
  title: 'title',
  description: 'description',
  body: 'body',
  tagList: 'tagList'
} as const;

export interface NewArticleValues {
  [FIELDS.title]: string;
  [FIELDS.description]: string;
  [FIELDS.body]: string;
  [FIELDS.tagList]: string[];
}
