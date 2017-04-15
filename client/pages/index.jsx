import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import LandingPage from './LandingPage.jsx';
import LivePresenterPage from './LivePresenterPage.jsx';
import LiveAudiencePage from './LiveAudiencePage.jsx';
import Dashboard from './Dashboard.jsx';
import Admin from './Admin.jsx';
import SocketOn from './../socketOn.js';
import store from './store.js';

const history = createHistory();

SocketOn(store);

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        {window.__CHANNEL__ > 0 ? (
          <Route exact path="/" component={LiveAudiencePage} />
        ) : (
          <Route exact path="/" component={Dashboard} />
        )}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/live-presenter-page" component={LivePresenterPage} />
        <Route path="/live-audience-page" component={LiveAudiencePage} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
