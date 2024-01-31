import { message } from 'antd';
import axios from 'axios';
// import moment from 'moment-timezone';
// import { userUnauthenticatedAction } from '../store/actions/authActions';
// import { store } from '../store/store';
// import history from '../utils/history';

// const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// const timezone = moment.tz(zone).format('Z');
// const currentTS = `${moment().format('YYYY-MM-DD')} ${moment().format(
//   'HH:mm:ss.ssssss'
// )}${timezone}`;
// console.log('currentTS', currentTS);
const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_WEB_API_BASEURL}/${process.env.REACT_APP_WEB_API_VERSION}`,
  headers: {
    'Content-Type': 'application/json',
    // 'Request-ts': currentTS,
    'Accept-Language': 'en-US',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    try {
      switch (error.response.status_code) {
        case 401:
          message.error('User session expired. Please login again.');
          // localStorage.removeItem('token');
          // store.dispatch(userUnauthenticatedAction());
          // history.push("/");
          break;
        case 400:
          if (
            error.response.config.url !== '/get-user/' ||
            error.response.config.url !== '/login/'
          ) {
            // message.error(error.response.data.detail);
            return Promise.reject(error);
          }
          break;
        case 404:
          message.error('Invalid request. Login & retry.');
          break;
        case 500:
          message.error('Error connecting to server. Please try again.');
          break;
        case 502:
          message.error('Network Error.');
          break;
        default:
          return Promise.reject(error);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export default axiosClient;
