import { takeLatest, put, all } from 'redux-saga/effects';
import * as types from '../store/actionTypes';
import {
  loginService,
  userMeService,
  resetPasswordService,
  forgotPasswordService,
  // logoutService,
} from '../services/authService';
import {
  loginSuccessAction,
  loginFailAction,
  userMeSuccessAction,
  userMeFailAction,
  resetPasswordFailAction,
  resetPasswordSuccessAction,
  forgotPasswordSuccessAction,
  forgotPasswordFailAction,
  logoutSuccessAction,
  logoutFailAction,
} from '../store/actions/authActions';
import { notification } from 'antd';

// Login
export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield loginService(email, password);
    //Do store session token and data
    if (user.data.status_code === 200) {
      localStorage.setItem('token', user.data.data.token);
      yield put(loginSuccessAction(user.data.data));
    } else {
      yield put(loginFailAction(user.detail));
    }
  } catch (error) {
    localStorage.removeItem('token');
    yield put(loginFailAction(error.response.data.detail));
  }
}

// Logout
export function* logout() {
  try {
    // yield logoutService();
    yield put(logoutSuccessAction());
    // notification['success']({
    //   message: 'Logout successful.',
    //   description: 'Logout successfully done',
    // });
    // localStorage.removeItem('token');
  } catch (error) {
    yield put(logoutFailAction());
    notification['error']({
      message: 'Logout failed.',
      description: 'Logout failed.',
    });
  }
}

//Forgot Password
export function* sendPasswordResetLink({ payload }) {
  try {
    yield forgotPasswordService(payload);
    yield put(forgotPasswordSuccessAction());
    notification['success']({
      message: 'Password reset link sent successfully.',
      description: 'Please check your email.',
    });
  } catch (error) {
    yield put(forgotPasswordFailAction(error));
    notification['error']({
      message: 'Password reset request failed.',
      description: 'Please try again.',
    });
  }
}

// Reset Password
export function* resetPasswordWithMail({
  payload: { reset_token, email, password },
}) {
  try {
    const res = yield resetPasswordService(reset_token, email, password);
    yield put(resetPasswordSuccessAction(res.data));
  } catch (error) {
    yield put(resetPasswordFailAction(error));
  }
}

export function* userMeCall({ payload }) {
  try {
    const user = yield userMeService(payload);
    // localStorage.setItem('token', payload);
    yield put(userMeSuccessAction(user.data.data));
  } catch (error) {
    localStorage.removeItem('token');
    yield put(userMeFailAction(error));
  }
}

export function* onLoginRequest() {
  yield takeLatest(types.LOGIN_REQUEST, logInWithCredentials);
}

export function* onLogoutRequest() {
  yield takeLatest(types.LOG_OUT_REQUEST, logout);
}

export function* onUserMeRequest() {
  yield takeLatest(types.USER_ME_REQUEST, userMeCall);
}

export function* onForgotPasswordRequest() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, sendPasswordResetLink);
}

export function* resetPasswordRequest() {
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPasswordWithMail);
}

export function* authSaga() {
  yield all([
    onLoginRequest(),
    onLogoutRequest(),
    onUserMeRequest(),
    onForgotPasswordRequest(),
    resetPasswordRequest(),
  ]);
}
