// Root Reducer
import { combineReducers } from 'redux';
import config from './config';
import dashboard from './dashboard';
import rolesPermission from './rolesPermissions';
import leftSidebar from './left-sidebar';
import palettes from './palettes';
import navigation from './navigation';
import auth from './authReducer';
import upload from './uploadReducer';
import userProfile from './userProfileReducer';

const rootReducer = combineReducers({
  navigation,
  config,
  dashboard,
  rolesPermission,
  leftSidebar,
  palettes,
  auth,
  userProfile,
  upload,
});

export default rootReducer;
