import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import LandingPage from './LandingPage.jsx';
import LivePresenterPage from './LivePresenterPage.jsx';
import LiveAudiencePage from './LiveAudiencePage.jsx';
import Dashboard from './Dashboard.jsx';
import SocketTest from './socketTest.jsx';
import rootReducer from './../reducers';

const history = createHistory();
const store = createStore(
  rootReducer,
  // Lets Redux DevTools access states and actions
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <div> React: {React.version}
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/live-presenter-page" component={LivePresenterPage} />
        <Route path="/live-audience-page" component={LiveAudiencePage} />
        <Route path="/socket-test-page" component={ SocketTest } />
      </div>
    </Router>
  </Provider>
);
export default AppRouter;
