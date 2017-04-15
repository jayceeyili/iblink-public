import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import LandingPage from './LandingPage.jsx';
import LivePresenterPage from './LivePresenterPage.jsx';
import LiveAudiencePage from './LiveAudiencePage.jsx';
import Dashboard from './Dashboard.jsx';
import rootReducer from './../reducers';
import Admin from './Admin.jsx';
import SocketOn, { broadcastMiddleware, redirectMiddleware } from './../socketOn.js';

const history = createHistory();
const createStoreWithMiddleware = applyMiddleware(broadcastMiddleware, redirectMiddleware)(createStore);
const store = createStoreWithMiddleware(
  rootReducer,
  // Lets Redux DevTools access states and actions
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

SocketOn(store);

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        {window.__CHANNEL__ > 0 ? (
          <Route exact path="/" component={LiveAudiencePage} />
        ) : (
          <Route exact path="/" component={LandingPage} />
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
