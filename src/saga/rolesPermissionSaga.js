import { put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../store/actionTypes/roles-permission';
import {
  listRolesSuccess,
  listRolesFailed,
  getRolesSuccess,
  getRolesFailed,
  updateRoleSuccess,
  updateRoleFailed,
} from '../store/actions/rolesPermissionActions';
import {
  listRolesService,
  getRoleService,
  updateRoleService,
} from '../services/rolesPermissionService';
import { notification } from 'antd';

export function* listRoles({ payload }) {
  try {
    const list = yield listRolesService(payload);
    yield put(listRolesSuccess(list.data.data));
  } catch (error) {
    yield put(listRolesFailed(error));
  }
}
export function* getRoles({ payload }) {
  try {
    const list = yield getRoleService(payload);
    yield put(getRolesSuccess(list.data.data));
  } catch (error) {
    yield put(getRolesFailed(error));
  }
}
export function* updateRole({ payload }) {
  try {
    const list = yield updateRoleService(payload.id, payload.data);
    yield put(updateRoleSuccess(list.data.data));
    notification['success']({
      message: 'Permissions updated successfully.',
      description: 'Permissions updated successfully.',
    });
  } catch (error) {
    yield put(updateRoleFailed(error));
    notification['error']({
      message: 'Something went wrong!',
      description: 'Please retry or contact administration.',
    });
  }
}
export function* onListRoles() {
  yield takeLatest(types.LIST_ROLES, listRoles);
}
export function* onGetRoles() {
  yield takeLatest(types.GET_ROLE, getRoles);
}
export function* onUpdateRole() {
  yield takeLatest(types.UPDATE_ROLE, updateRole);
}

export function* rolesPermissionSaga() {
  yield all([onListRoles(), onGetRoles(), onUpdateRole()]);
}
