import axiosClient from './config';

export const listRolesService = async (type) => {
  return await axiosClient.get(`/roles?type=${type}`);
};
export const getRoleService = async (role_id) => {
  return await axiosClient.get(`/roles/${role_id}/`);
};
export const updateRoleService = async (id, data) => {
  console.log('updateRoleService', id, data);
  return await axiosClient.post(`/roles/${id}/sync-permissions/`, data);
};
