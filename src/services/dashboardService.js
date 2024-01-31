import axiosClient from './config';

export const getDashboardStatsService = async () => {
  return await axiosClient.get('/dashboard/');
};
