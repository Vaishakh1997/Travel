import * as types from '../actionTypes/roles-permission';

export const listRoles = (role_type) => {
  return {
    type: types.LIST_ROLES,
    payload: role_type,
  };
};
export const listRolesSuccess = (roles) => {
  return {
    type: types.LIST_ROLES_SUCCESS,
    payload: roles,
  };
};
export const listRolesFailed = (error) => {
  return {
    type: types.LIST_ROLES_FAILED,
    payload: error,
  };
};

export const getRoles = (id) => {
  return {
    type: types.GET_ROLE,
    payload: id,
  };
};
export const getRolesSuccess = (roles) => {
  return {
    type: types.GET_ROLE_SUCCESS,
    payload: roles,
  };
};
export const getRolesFailed = (error) => {
  return {
    type: types.GET_ROLE_FAILED,
    payload: error,
  };
};

export const updateRole = (id, data) => {
  return {
    type: types.UPDATE_ROLE,
    payload: {
      id,
      data,
    },
  };
};
export const updateRoleSuccess = (roles) => {
  return {
    type: types.UPDATE_ROLE_SUCCESS,
    payload: roles,
  };
};
export const updateRoleFailed = (error) => {
  return {
    type: types.UPDATE_ROLE_FAILED,
    payload: error,
  };
};

export const resetRolePermission = () => {
  return {
    type: types.RESET_ROLE_PERMISSION,
  };
};
