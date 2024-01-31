import * as types from '../actionTypes';

export const loginRequestAction = (credentials) => {
  return {
    type: types.LOGIN_REQUEST,
    payload: credentials,
  };
};

export const loginSuccessAction = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailAction = (error) => {
  return {
    type: types.LOGIN_FAIL,
    payload: error,
  };
};

export const userMeRequestAction = (token) => {
  return {
    type: types.USER_ME_REQUEST,
    payload: token,
  };
};

export const userMeSuccessAction = (user) => {
  return {
    type: types.USER_ME_SUCCESS,
    payload: user,
  };
};

export const userMeFailAction = (error) => {
  return {
    type: types.USER_ME_FAIL,
    payload: error,
  };
};

export const logoutRequestAction = () => {
  return {
    type: types.LOG_OUT_REQUEST,
  };
};
export const logoutSuccessAction = () => {
  return {
    type: types.LOG_OUT_SUCCESS,
  };
};
export const logoutFailAction = () => {
  return {
    type: types.LOG_OUT_FAIL,
  };
};

export const resetPasswordRequestAction = (data) => {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload: data,
  };
};
export const resetPasswordSuccessAction = () => {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
  };
};
export const resetPasswordFailAction = (error) => {
  return {
    type: types.RESET_PASSWORD_FAIL,
    payload: error,
  };
};

export const forgotPasswordRequestAction = (email) => {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    payload: email,
  };
};
export const forgotPasswordSuccessAction = () => {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
  };
};
export const forgotPasswordFailAction = (error) => {
  return {
    type: types.FORGOT_PASSWORD_FAIL,
    payload: error,
  };
};
export const userUnauthenticatedAction = () => {
  return {
    type: types.USER_UNAUTHENTICATED,
  };
};
