import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
// import createHistory from 'history/createBrowserHistory';
import Landing from './Landing.jsx';
// import SearchView from './SearchView.jsx';
// import ShortListView from './SearchView.jsx';
// import LazyView from './SearchView.jsx';

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

// const Home = () => <h1>Hello from Home!</h1>
// const Address = () => <h1>We are located at 555 Jackson St.</h1>
// put other Routes under line 19
