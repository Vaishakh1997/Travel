import axiosClient from './config';

export const loginService = async (email, password) => {
  return await axiosClient.post('/login/', {
    email,
    password,
  });
};

export const userMeService = async (token) => {
  return await axiosClient.post('/get-user/', {
    token,
  });
};

export const resetPasswordService = async (reset_token, email, password) => {
  return await axiosClient.post('/reset-password/', {
    reset_token,
    email,
    password,
  });
};

export const forgotPasswordService = async (email) => {
  return await axiosClient.post('/forgot-password/', {
    email,
  });
};

export const logoutService = async () => {
  return await axiosClient.post('/logout/');
};
