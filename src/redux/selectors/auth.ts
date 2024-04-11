import type { StoreType } from '../store';

export const getIsAuthenticated = (state: StoreType) =>
  state.auth.isAuthenticated;
export const getUserName = (state: StoreType) => state.auth.user.name;
export const getUserEmail = (state: StoreType) => state.auth.user.email;
export const getIsLoadingAuth = (state: StoreType) => state.auth.loading;
export const getAuthError = (state: StoreType) => state.auth.error;
