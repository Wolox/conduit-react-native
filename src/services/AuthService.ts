import { ApiResponse } from 'apisauce';
import api from '@config/api';
import { AuthData, SignUpData, UpdateProfileData } from '@interfaces/authInterfaces';
import { LOGIN_PATH, REGISTER_PATH } from '@constants/authServiceConstants';

export const login = ({ email, password }: AuthData) => {
  const data = {
    user: {
      email,
      password
    }
  };
  return api.post(`${LOGIN_PATH}`, data);
  // login: (email, password) =>
  //   requests.post('/users/login', { user: { email, password } }),
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  // TODO: if you want to test api success
  // return Promise.resolve({
  //   ok: true,
  //   problem: null,
  //   originalError: null,
  //   data: {
  //     sessionToken: 'token',
  //     id: 191,
  //     email: '123@123.com',
  //     username: 'signup',
  //     bio: null,
  //     image: null,
  //     token:
  //       'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTkxLCJleHAiOjE2MzM4ODA4Njl9.QqpNhMYWmaVG_lsLjtRNYk3YYNg6rQqi5IDhIlxEFmI'
  // });
};

export const logout = () => {
  // TODO: Implement call to authentication API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: null,
    currentUser: null
  });
};

export const signup = ({ email, password, username }: SignUpData) => {
  // TODO: Implement call to registration API here
  const data = {
    user: {
      email,
      password,
      username
    }
  };
  return api.post(`${REGISTER_PATH}`, data);
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {},
  //   data: 'Error en el signup!'
  // }) as Promise<ApiResponse<any, any>>;
  // TODO: if you want to test success:
  // return Promise.resolve({
  //   ok: true,
  //   problem: null,
  //   originalError: null,
  //   data: {}
  // }) as Promise<ApiResponse<any, any>>;
};

export const updateProfile = (_: UpdateProfileData) => {
  // TODO: Implement call to registration API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {},
  //   data: 'Error updating profile data'
  // }) as Promise<ApiResponse<any, any>>;
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: {}
  }) as Promise<ApiResponse<any, any>>;
};
