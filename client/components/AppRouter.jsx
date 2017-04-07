import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Landing from './Landing.jsx';

const history = createHistory();

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
    return (
      <Router history={ history }>
        <Route exact path="/" component={ Landing } />
      </Router>
    );
  }
};

// put other Routes under line 16
