export interface CurrentUser {
  sessionToken: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
  phoneNumber?: string;
}
