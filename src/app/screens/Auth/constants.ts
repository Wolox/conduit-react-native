export const FIELDS = {
  username: 'username',
  email: 'email',
  password: 'password'
} as const;

export interface SignupFormValues {
  [FIELDS.username]: string;
  [FIELDS.email]: string;
  [FIELDS.password]: string;
}

export interface LoginFormValues {
  [FIELDS.email]: string;
  [FIELDS.password]: string;
}
