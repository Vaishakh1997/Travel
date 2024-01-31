import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isEmpty } from '../utils/generic';
import ErrorPage from '../pages/error-page';
import Login from '../pages/login';
import EditProfile from '../pages/edit-profile';
import Flight from '../pages/flight'
import Hotel from '../pages/hotel'
import ResetPassword from '../pages/reset-password';
import FlightList1 from '../pages/flight/Listing1';
import FlightList2 from '../pages/flight/Listing2';
import FlightDetails from '../pages/flight/Booking';
import PaymentSummary from '../pages/flight/Summary';

export const PrivateRoutes = () => {
  // const userPermissions = ["admin_dashboard_access"];
  const routeConfig = [
    {
      path: '/',
      component: Flight,
      exact: true
    },
    {
      path: '/flight',
      component: Flight,
      exact: true
    },
    {
      path: '/hotel',
      component: Hotel,
      exact: true
    },
    {
      path: '/flight-list-1',
      component: FlightList1,
      exact: true
    },
    {
      path: '/flight-list-2',
      component: FlightList2,
      exact: true
    },
    {
      path: '/flight-booking',
      component: FlightDetails,
      exact: true
    },
    {
      path: '/flight-payment',
      component: PaymentSummary,
      exact: true
    }
  ];

  return (
    <Switch>
      {!isEmpty(routeConfig) &&
        routeConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}

      {/* <Route
        exact
        path="/"
        render={() =>
          !isEmpty(auth.currentUser) ? (
            <Redirect to={roleBasedRoutes[0].path} />
          ) : (
            <Login />
          )
        }
      /> */}

      <Route exact path="/edit-profile/:uuid" component={EditProfile} />

      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/**" component={ErrorPage} />
    </Switch>
  );
};
