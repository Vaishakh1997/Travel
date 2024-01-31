import * as types from '../actionTypes/dashboard';

const initialState = {
  stats: null,
  statsLoading: false,
  statsError: null,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DASHBOARD_STATS:
      return {
        ...state,
        statsLoading: true,
      };
    case types.GET_DASHBOARD_STATS_SUCCESS:
      return {
        ...state,
        stats: action.payload,
        statsLoading: false,
      };
    case types.GET_DASHBOARD_STATS_FAILED:
      return {
        ...state,
        statsLoading: false,
        statsError: action.payload,
      };
    default:
      return state;
  }
};

export default dashboard;
