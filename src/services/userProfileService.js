import axiosClient from './config';

export const getUserProfileService = async () => {
  return await axiosClient.get(`/profile/`);
};

export const updateUserPasswordService = async (old_password, password) => {
  return await axiosClient.post('/profile/update-password/', {
    old_password,
    password,
  });
};
export const emailChangeRequestService = async (userId, password) => {
  return await axiosClient.patch('/profile/update-email/', {
    userId,
    password,
  });
};
export const updateProfilePictureService = async (profile_image) => {
  return await axiosClient.patch('/profile/update-picture/', {
    profile_image,
  });
};
export const updateUserNameService = async (name) => {
  return await axiosClient.patch('/profile/', {
    name,
  });
};
