import { put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../store/actionTypes/dashboard';
import {
  getDashboardStatsSuccess,
  getDashboardStatsFailed,
} from '../store/actions/dashboardActions';
import { getDashboardStatsService } from '../services/dashboardService';

export function* getDashboardStats({ payload }) {
  try {
    const list = yield getDashboardStatsService(payload);
    yield put(getDashboardStatsSuccess(list.data.data));
  } catch (error) {
    yield put(getDashboardStatsFailed(error));
  }
}

export function* onGetStatsRequest() {
  yield takeLatest(types.GET_DASHBOARD_STATS, getDashboardStats);
}

export function* dashboardSaga() {
  yield all([onGetStatsRequest()]);
}
