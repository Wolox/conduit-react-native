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

export interface TextInputKeyEvent {
  nativeEvent: {
    key: string;
    text: string;
  };
}

export const fiedlsValidations = () => ({
  MIN_LENGHT_FIELD: 5,
  MAX_TITLE_LENGHT: 80,
  MAX_DESCRIPTION_LENGHT: 200,
  MAX_BODY_LENGHT: 5000
});
