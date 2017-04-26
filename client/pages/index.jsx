import 'babel-polyfill';
import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import LandingPage from './LandingPage.jsx';
import AudiencePresentationContainer from '../containers/audiencePresentationContainer.jsx';
import Dashboard from './Dashboard.jsx';
import Admin from './Admin.jsx';
import configureStore from '../store/configureStore.jsx';
import SocketOn from '../socketOn.js';

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

// Load the state one more time for Redux dev tools
import reduxTest from '../store/redux-dev.jsx';
reduxTest(preloadedState);
console.log('*********************************');
console.log(' Preloaded state:', preloadedState);

SocketOn(store);

const history = createHistory();

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        {store.getState().sockets.channel > 0 ? (
          <Route exact path="/" component={AudiencePresentationContainer} />
        ) : (
          <Route exact path="/" component={Dashboard} />
        )}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
