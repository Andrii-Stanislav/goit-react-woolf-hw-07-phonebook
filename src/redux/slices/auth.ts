import { createSlice, PayloadAction as Action } from '@reduxjs/toolkit';

import type * as T from '../../types';
import { reducerErrorFunc } from '../../utils';

const initialUserState = {
  name: null as null | string,
  email: null as null | string,
};

const initialState = {
  user: initialUserState,
  isAuthenticated: false,
  token: null as null | string,
  error: null as null | string,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerRequest: state => ({ ...state, loading: true }),
    registerSuccess: (state, action: Action<T.RegisterResponse>) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isAuthenticated: true,
      loading: false,
    }),
    registerError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),

    loginRequest: state => ({ ...state, loading: true }),
    loginSuccess: (state, action: Action<T.LoginResponse>) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isAuthenticated: true,
      loading: false,
    }),
    loginError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),

    logoutRequest: state => ({ ...state, loading: true }),
    logoutSuccess: state => ({
      ...state,
      user: initialUserState,
      token: null,
      isAuthenticated: false,
      loading: false,
    }),
    logoutError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),

    getCurrentUserRequest: state => ({ ...state, loading: true }),
    getCurrentUserSuccess: (state, action: Action<T.LoginResponse>) => ({
      ...state,
      user: action.payload.user,
      isAuthenticated: true,
      loading: false,
    }),
    getCurrentUserError: (state, action: Action<T.ApiError>) => ({
      ...state,
      loading: false,
      error: reducerErrorFunc(action.payload),
    }),

    removeAuthError: state => ({ ...state, error: null }),
  },
});

export default authSlice.reducer;
