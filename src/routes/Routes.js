import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/loader';
import { isEmpty } from '../utils/generic';
import { userMeRequestAction } from '../store/actions/authActions';
import { PrivateRoutes } from './Private';
import { PublicRoutes } from './Public';

function Routes() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { currentUser, loginLoading } = auth;
  const token = localStorage.getItem('token');

  console.log(window.location.pathname);

  if (loginLoading) {
    return <Loader />;
  } else if (!isEmpty(currentUser && token)) {
    return <PrivateRoutes auth={auth} />;
  } else {
    if (isEmpty(token)) {
      // return <PublicRoutes />;
      return <PrivateRoutes auth={auth} />
    } else {
      dispatch(userMeRequestAction(token));
      return <Loader />;
    }
  }
}
export default Routes;
