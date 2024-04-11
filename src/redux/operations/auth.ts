import * as Actions from '../slices/auth.actions';
import type { DispatchType, GetStateType } from '../store';

import { authApi, token } from '../../api';
import type * as TYPES from '../../types';

export const registerUser = (newUser: TYPES.RegisterRequest) => async (
  dispatch: DispatchType,
) => {
  dispatch(Actions.registerRequest());
  try {
    const { data } = await authApi.register(newUser);
    token.set(data.token);
    dispatch(Actions.registerSuccess(data));
  } catch (error) {
    dispatch(Actions.registerError(error as TYPES.ApiError));
  }
};

export const logIn = (user: TYPES.LoginRequest) => async (
  dispatch: DispatchType,
) => {
  dispatch(Actions.loginRequest());
  try {
    const { data } = await authApi.login(user);
    token.set(data.token);
    dispatch(Actions.loginSuccess(data));
  } catch (error) {
    dispatch(Actions.loginError(error as TYPES.ApiError));
  }
};

export const logOut = () => async (dispatch: DispatchType) => {
  dispatch(Actions.logoutRequest());
  try {
    await authApi.logout();
    token.unset();
    dispatch(Actions.logoutSuccess());
  } catch (error) {
    dispatch(Actions.logoutError(error as TYPES.ApiError));
  }
};

export const getCurrentUser = () => async (
  dispatch: DispatchType,
  getState: GetStateType,
) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(Actions.getCurrentUserRequest());
  try {
    const { data } = await authApi.getCurrentUser();
    dispatch(Actions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(Actions.getCurrentUserError(error as TYPES.ApiError));
  }
};
