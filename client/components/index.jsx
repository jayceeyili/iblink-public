import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Landing from './Landing.jsx';
import LivePresentation from './LivePresentation.jsx'

const history = createHistory();

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
    return (
      <div>
        <Router history={ history }>
          <Route exact path='/' component={ Landing } />
          <Route path='/livePresentation' component={ LivePresentation } />
        </Router>
      </div>
    );
  }
};
