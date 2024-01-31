import * as types from '../actionTypes/user-profile';

const initialState = {
  user: null,
  userLoading: false,
  userError: null,
  updateUserPasswordLoading: false,
  updateUserPasswordSuccess: false,
  updateUserPasswordError: null,
  emailChangeRequestLoading: false,
  emailChangeRequestSuccess: false,
  emailChangeRequestError: null,
  uploadUserProfileImageLoading: false,
  uploadUserProfileImageSuccess: false,
  uploadUserProfileImageError: null,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE:
      return {
        ...state,
        userLoading: true,
      };
    case types.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      };
    case types.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userLoading: false,
        userError: action.payload,
      };
    case types.UPDATE_USER_PASSWORD:
      return {
        ...state,
        updateUserPasswordLoading: true,
      };
    case types.UPDATE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        updateUserPasswordLoading: false,
        updateUserPasswordSuccess: true,
      };
    case types.UPDATE_USER_PASSWORD_FAILURE:
      return {
        ...state,
        updateUserPasswordLoading: false,
        updateUserPasswordError: action.payload,
      };
    case types.UPDATE_USER_NAME:
      return {
        ...state,
        userLoading: true,
      };
    case types.UPDATE_USER_NAME_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: action.payload,
      };
    case types.UPDATE_USER_NAME_FAILURE:
      return {
        ...state,
        userLoading: false,
        userError: action.payload,
      };
    case types.EMAIL_CHANGE_REQUEST:
      return {
        ...state,
        emailChangeRequestLoading: true,
      };
    case types.EMAIL_CHANGE_REQUEST_SUCCESS:
      return {
        ...state,
        emailChangeRequestLoading: false,
        emailChangeRequestSuccess: true,
      };
    case types.EMAIL_CHANGE_REQUEST_FAILURE:
      return {
        ...state,
        emailChangeRequestLoading: false,
        emailChangeRequestError: action.payload,
      };
    case types.UPLOAD_USER_PROFILE_IMAGE:
      return {
        ...state,
        uploadUserProfileImageLoading: true,
      };
    case types.UPLOAD_USER_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        uploadUserProfileImageLoading: false,
        uploadUserProfileImageSuccess: true,
      };
    case types.UPLOAD_USER_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        uploadUserProfileImageLoading: false,
        uploadUserProfileImageError: action.payload,
      };
    case types.DELETE_USER_PROFILE_IMAGE:
      return {
        ...state,
        uploadUserProfileImageLoading: true,
      };
    case types.DELETE_USER_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        uploadUserProfileImageLoading: false,
        uploadUserProfileImageSuccess: true,
      };
    case types.DELETE_USER_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        uploadUserProfileImageLoading: false,
        uploadUserProfileImageError: action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
