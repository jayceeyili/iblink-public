import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
        <Link to='/livePresentation'>livePresentation</Link>
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
