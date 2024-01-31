import { put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../store/actionTypes/user-profile';
import {
  getUserProfileSuccessAction,
  getUserProfileFailAction,
  updateUserPasswordSuccessAction,
  updateUserPasswordFailAction,
  uploadUserProfileImageFailAction,
  uploadUserProfileImageSuccessAction,
  updateUserNameFailAction,
  updateUserNameSuccessAction,
} from '../store/actions/userProfileActions';
import {
  getUserProfileService,
  updateProfilePictureService,
  updateUserPasswordService,
  updateUserNameService,
} from '../services/userProfileService';
import { message, notification } from 'antd';
import history from '../utils/history';
import { logoutRequestAction } from '../store/actions/authActions';

//Worker
export function* getUserProfile() {
  try {
    const list = yield getUserProfileService();
    yield put(getUserProfileSuccessAction(list.data.data));
  } catch (error) {
    yield put(getUserProfileFailAction(error));
  }
}
export function* updateUserPassword({ payload: { old_password, password } }) {


  try {
    const list = yield updateUserPasswordService(old_password, password);
    yield put(updateUserPasswordSuccessAction(list.data.data));
    notification.success({
      message: 'Password Updated',
      description: 'Password has been updated successfully',
    });
    // history.push('/dashboard');
    yield put(logoutRequestAction());
  } catch (error) {
    yield put(updateUserPasswordFailAction(error));
    message.error('Incorrect current password');
  }
}
export function* updateProfileImage({ payload: { profile_image } }) {
  try {
    const list = yield updateProfilePictureService(profile_image);
    yield put(uploadUserProfileImageSuccessAction(list.data.data));
    notification.success({
      message: 'Profile Picture Updated',
      description: 'Profile Picture has been updated successfully',
    });
    history.go(0);
  } catch (error) {
    yield put(uploadUserProfileImageFailAction(error));
    message.error('Failed');
  }
}
export function* updateUserName({ payload }) {
  try {
    const list = yield updateUserNameService(payload);
    yield put(updateUserNameSuccessAction(list.data.data));
    notification.success({
      message: 'Name Updated Successfully',
      description: 'Name has been updated successfully',
    });
    history.go(0);
  } catch (error) {
    yield put(updateUserNameFailAction(error));
    message.error('Failed');
  }
}

//Watcher
export function* onGetProfileRequest() {
  yield takeLatest(types.GET_USER_PROFILE, getUserProfile);
}
export function* onPasswordUpdateRequest() {
  yield takeLatest(types.UPDATE_USER_PASSWORD, updateUserPassword);
}
export function* onUpdateProfileImage() {
  yield takeLatest(types.UPLOAD_USER_PROFILE_IMAGE, updateProfileImage);
}
export function* onUpdateUserName() {
  yield takeLatest(types.UPDATE_USER_NAME, updateUserName);
}

export function* userProfile() {
  yield all([
    onGetProfileRequest(),
    onPasswordUpdateRequest(),
    onUpdateProfileImage(),
    onUpdateUserName(),
  ]);
}
