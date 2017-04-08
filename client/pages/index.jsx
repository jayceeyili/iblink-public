import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import LandingPage from './LandingPage.jsx';
import LivePresenterPage from './LivePresenterPage.jsx';
import LiveAudiencePage from './LiveAudiencePage.jsx';
import Dashboard from './Dashboard.jsx';

const history = createHistory();

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/live-presenter-page" component={LivePresenterPage} />
          <Route path="/live-audience-page" component={LiveAudiencePage} />
        </div>
      </Router>
    );
  }
}
