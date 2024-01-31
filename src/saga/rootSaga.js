import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { userProfile } from './userProfileSaga';
import { dashboardSaga } from './dashboardSaga';
import { rolesPermissionSaga } from './rolesPermissionSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    dashboardSaga(),
    userProfile(),
    rolesPermissionSaga(),
  ]);
}

export default rootSaga;
