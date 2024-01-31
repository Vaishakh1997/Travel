import React from 'react';
import { useLocation } from 'react-router-dom';
import Centered from './centered';
import Empty from './empty';
import Layout from './layout';

const Layouts = ({ children }) => {
  let location = useLocation();
  let { pathname } = { ...location };
  if (['/login', '/error-page', '/forgot-password'].includes(pathname)) {
    return <Centered>{children}</Centered>;
  } else if (['/landing'].includes(pathname)) {
    return <Empty>{children}</Empty>;
  } else {
    return <Layout>{children}</Layout>;
  }
};

export default Layouts;
