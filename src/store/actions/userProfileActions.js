import * as types from '../actionTypes/user-profile';

export const getUserProfileAction = () => {
  return {
    type: types.GET_USER_PROFILE,
  };
};
export const getUserProfileSuccessAction = (user) => {
  return {
    type: types.GET_USER_PROFILE_SUCCESS,
    payload: user,
  };
};
export const getUserProfileFailAction = (error) => {
  return {
    type: types.GET_USER_PROFILE_FAILURE,
    payload: error,
  };
};
export const updateUserPasswordAction = (old_password, password) => {
  return {
    type: types.UPDATE_USER_PASSWORD,
    payload: { old_password, password },
  };
};
export const updateUserPasswordSuccessAction = (user) => {
  return {
    type: types.UPDATE_USER_PASSWORD_SUCCESS,
    payload: user,
  };
};
export const updateUserPasswordFailAction = (error) => {
  return {
    type: types.UPDATE_USER_PASSWORD_FAILURE,
    payload: error,
  };
};
export const updateUserNameAction = (name) => {
  return {
    type: types.UPDATE_USER_NAME,
    payload: name,
  };
};
export const updateUserNameSuccessAction = (user) => {
  return {
    type: types.UPDATE_USER_NAME_SUCCESS,
    payload: user,
  };
};
export const updateUserNameFailAction = (error) => {
  return {
    type: types.UPDATE_USER_NAME_FAILURE,
    payload: error,
  };
};
export const emailChangeRequestAction = (userId, values) => {
  return {
    type: types.EMAIL_CHANGE_REQUEST,
    payload: { userId, values },
  };
};
export const emailChangeRequestSuccessAction = (user) => {
  return {
    type: types.EMAIL_CHANGE_REQUEST_SUCCESS,
    payload: user,
  };
};
export const emailChangeRequestFailAction = (error) => {
  return {
    type: types.EMAIL_CHANGE_REQUEST_FAILURE,
    payload: error,
  };
};
export const uploadUserProfileImageAction = (profile_image) => {
  return {
    type: types.UPLOAD_USER_PROFILE_IMAGE,
    payload: profile_image,
  };
};
export const uploadUserProfileImageSuccessAction = (user) => {
  return {
    type: types.UPLOAD_USER_PROFILE_IMAGE_SUCCESS,
    payload: user,
  };
};
export const uploadUserProfileImageFailAction = (error) => {
  return {
    type: types.UPLOAD_USER_PROFILE_IMAGE_FAILURE,
    payload: error,
  };
};
export const deleteUserProfileImageAction = (userId, values) => {
  return {
    type: types.DELETE_USER_PROFILE_IMAGE,
    payload: { userId, values },
  };
};
export const deleteUserProfileImageSuccessAction = (user) => {
  return {
    type: types.DELETE_USER_PROFILE_IMAGE_SUCCESS,
    payload: user,
  };
};
export const deleteUserProfileImageFailAction = (error) => {
  return {
    type: types.DELETE_USER_PROFILE_IMAGE_FAILURE,
    payload: error,
  };
};
