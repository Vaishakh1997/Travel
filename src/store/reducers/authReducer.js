import * as types from '../actionTypes';

const initialState = {
  currentUser: null,
  loginLoading: false,
  loginError: null,
  loginSuccess: false,
  logoutLoading: false,
  forgotPasswordLoading: false,
  forgotPasswordError: null,
  forgotPasswordSuccess: false,
  resetPasswordError: null,
  resetPasswordSuccess: null,
  resetPasswordLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginError: null,
        loginSuccess: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loginLoading: false,
        loginError: null,
        loginSuccess: true,
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        currentUser: null,
        loginLoading: false,
        loginError: action.payload,
      };

    case types.USER_ME_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case types.USER_ME_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loginLoading: false,
        error: null,
      };

    case types.USER_ME_FAIL:
      return {
        ...state,
        currentUser: null,
        loginLoading: false,
        error: action.payload,
      };

    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPasswordLoading: true,
        resetPasswordSuccess: false,
        resetPasswordError: null,
      };

    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordSuccess: true,
        resetPasswordError: null,
      };

    case types.RESET_PASSWORD_FAIL:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordError: action.payload,
        resetPasswordSuccess: false,
      };
    case types.LOG_OUT_REQUEST:
      localStorage.removeItem('token');
      return initialState;
    case types.LOG_OUT_SUCCESS:
      return initialState;
    case types.LOG_OUT_FAIL:
      return {
        ...state,
        logoutLoading: false,
      };

    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPasswordLoading: true,
        forgotPasswordError: null,
        forgotPasswordSuccess: false,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordError: null,
        forgotPasswordSuccess: true,
      };
    case types.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordError: action.payload,
      };
    case types.USER_UNAUTHENTICATED:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
