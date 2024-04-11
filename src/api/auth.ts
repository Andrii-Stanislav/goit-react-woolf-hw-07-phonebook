import axios from 'axios';
import type * as T from '../types';

export const register = (newUser: T.RegisterRequest) =>
  axios.post<T.RegisterResponse>('/user/signup', newUser);

export const login = (user: T.LoginRequest) =>
  axios.post<T.LoginResponse>('/user/login', user);

export const logout = () => axios.post('/user/logout');

export const getCurrentUser = () => axios.get<T.LoginResponse>('/user/current');
