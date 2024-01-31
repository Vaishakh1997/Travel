import * as types from '../actionTypes/dashboard';

export const getDashboardStats = () => {
  return {
    type: types.GET_DASHBOARD_STATS,
  };
};
export const getDashboardStatsSuccess = (stats) => {
  return {
    type: types.GET_DASHBOARD_STATS_SUCCESS,
    payload: stats,
  };
};
export const getDashboardStatsFailed = (error) => {
  return {
    type: types.GET_DASHBOARD_STATS_FAILED,
    payload: error,
  };
};
