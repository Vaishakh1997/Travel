import * as types from '../actionTypes/roles-permission';

const initialState = {
  roles: null,
  rolesLoading: false,
  rolesError: null,
  currentRole: null,
  currentRoleLoading: false,
  currentRoleError: null,
};

const rolesPermissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ROLES:
      return {
        ...state,
        rolesLoading: true,
      };
    case types.LIST_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.payload,
        rolesLoading: false,
      };
    case types.LIST_ROLES_FAILED:
      return {
        ...state,
        rolesLoading: false,
        rolesError: action.payload,
      };
    case types.GET_ROLE:
      return {
        ...state,
        currentRoleLoading: true,
      };
    case types.GET_ROLE_SUCCESS:
      return {
        ...state,
        currentRole: action.payload,
        currentRoleLoading: false,
      };
    case types.GET_ROLE_FAILED:
      return {
        ...state,
        currentRoleLoading: false,
        currentRoleError: action.payload,
      };
    case types.UPDATE_ROLE:
      return {
        ...state,
        currentRoleLoading: true,
      };
    case types.UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        currentRole: action.payload,
        currentRoleLoading: false,
      };
    case types.UPDATE_ROLE_FAILED:
      return {
        ...state,
        currentRoleLoading: false,
        currentRoleError: action.payload,
      };
    case types.RESET_ROLE_PERMISSION:
      return {
        state: initialState,
      };
    default:
      return state;
  }
};

export default rolesPermissionsReducer;
