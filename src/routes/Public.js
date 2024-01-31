import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import ForgotPassword from '../pages/forgot-password';
import ResetPassword from '../pages/reset-password';
import Maintenance from '../pages/maintenance';

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route path="/forgot-password" component={ForgotPassword} />

      <Route path="/maintenance" component={Maintenance} />

      <Route path="/reset-password" component={ResetPassword} />

      <Redirect to="/" />
    </Switch>
  );
};
