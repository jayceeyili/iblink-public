import React from 'react';
import $ from 'jquery';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
  }

  render() {
    return (
      <div>
        <h1>This is Landing page</h1>
        <button>Login</button>
        <button>Signup</button>
      </div>
    );
  }
};
