import { ApiResponse } from 'apisauce';
import { AuthData, SignUpData, UpdateProfileData } from '@interfaces/authInterfaces';

export const login = (_: AuthData) => {
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
    data: {
      sessionToken: 'token',
      id: 191,
      email: '123@123.com',
      username: 'signup',
      bio: null,
      image: null,
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTkxLCJleHAiOjE2MzM4ODA4Njl9.QqpNhMYWmaVG_lsLjtRNYk3YYNg6rQqi5IDhIlxEFmI'
    }
  });
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
    data: null
  });
};

export const signup = (_: SignUpData) => {
  // TODO: Implement call to registration API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {},
  //   data: 'Error en el signup!'
  // }) as Promise<ApiResponse<any, any>>;
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: {}
  }) as Promise<ApiResponse<any, any>>;
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
