export interface CurrentUser {
  sessionToken: string;
  id: number;
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
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

export interface UpdateProfileData {
  username: string;
  email: string;
  description?: string;
}
