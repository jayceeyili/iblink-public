import React from 'react';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
  }

  render() {
    return (
      <div>
        <h2>This is the Landing page</h2>
        <button>Login</button>
        <button>Signup</button>
      </div>
    );
  }
};
