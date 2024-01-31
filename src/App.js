import PropTypes from 'prop-types';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layouts from './layouts';
import Routes from './routes/Routes';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/error-page';
import Fallback from './components/fallback/fallback';
import history from './utils/history';
import './i18next/i18next';
import 'antd/dist/antd.css';
import './css/tailwind.css';
import './css/animate.css';
import './css/_components.css';
import './css/main.scss';

// Sentry.init({
//   dsn: `${process.env.REACT_APP_SENTRY_DSN}`,
//   integrations: [new BrowserTracing()],
//   ignoreErrors: ['ResizeObserver loop limit exceeded'],
//   tracesSampleRate: 1.0,
// });

const Wrapper = ({ children }) => {
  return <Layouts>{children}</Layouts>;
};

Wrapper.propTypes = {
  children: PropTypes.any,
};

const errorHandler = (error, errorInfo) => {
  console.log('Error Boundary: ', error, errorInfo);
};

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Provider store={store}>
        <Router history={history}>
          <Wrapper>
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
              <Routes />
            </ErrorBoundary>
          </Wrapper>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};
export default App;
