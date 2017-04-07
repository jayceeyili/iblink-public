import React from 'react';

export default class Layout extends React.Component {
	constructor( props ) {
		super( props );

    this.state = {

    }

    this.handleLoginClick = this.handleLoginClick.bind( this );
    this.handleSignupClick = this.handleSignupClick.bind( this );
  }

  handleLoginClick() {
    console.log( 'Login!' );
  }

  handleSignupClick() {
    console.log( 'Signup!' );
  }

  render() {
    return (
      <div>
        <h2>This is the Landing page</h2>
        <button
          onClick={ this.handleLoginClick }>Login
        </button>
        <button
          onClick={ this.handleSignupClick }>Signup
        </button>
      </div>
    );
  }
};
