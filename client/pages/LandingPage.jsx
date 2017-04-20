import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleLoginClick() {
    console.log('Login!');
  }

  handleSignupClick() {
    console.log('Signup!');
  }

  render() {
    return (
      <div>
        <h2>This is the Landing page</h2>
<<<<<<< 7135d369e1a410358b50925744d93da4f5cccf6e
        <button
          onClick={this.handleLoginClick}
        >Login
        </button>
        <button
          onClick={this.handleSignupClick}
        >Signup
        </button>

=======
>>>>>>> (feat) modifying twitter authentication function
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
          <Link to="/live-presenter-page">Live presenter page</Link>
        </div>
        <div>
          <Link to="/live-audience-page">Live audience page</Link>
        </div>
        <div>
          <Link to="/admin">Admin page</Link>
        </div>
      </div>
    );
  }
}
