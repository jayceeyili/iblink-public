import React from 'react';
import { Route, Redirect } from 'react-router';
import { Button, Icon } from 'semantic-ui-react';
import firebase from 'firebase';

var config = {
      apiKey: 'AIzaSyBbMAiPs4GxjlWQbkAV-0OkvpB1GM-y_BQ',
      authDomain: "iblink-86850.firebaseapp.com",
      databaseURL: "https://iblink-86850.firebaseio.com",
      projectId: "iblink-86850",
      storageBucket: "iblink-86850.appspot.com",
      messagingSenderId: "477575412539"
    };

firebase.initializeApp(config);

class LoginView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      signup: false,
      loggedIn: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.signOut = this.signOut.bind(this)
    this.signUp = this.signUp.bind(this)
    this.loginProvider = this.loginProvider.bind(this)

  }

  handleChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {

    e.preventDefault()
    var email = this.state.email
    var password = this.state.password

    if (this.state.signup === false) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(results => {
        console.log('Success! Welcome', results.uid)
        this.props.loggedIn(results.uid)
        this.props.getUserData(results.uid)
        this.setState({
          email: '',
          password: '',
          loggedIn: true
        })
      })
      .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(results => {
          console.log('Success! Welcome', results.uid)
          this.props.loggedIn(results.uid)
          this.props.getUserData(results.uid)
          this.setState({
            email: '',
            password: '',
            loggedIn: true
          })
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    }

  }

  loginProvider(provider) {
    firebase.auth().signInWithPopup(provider).then(result => {
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      var user = result.user;
      console.log('Success! Welcome', user.uid);
      this.props.loggedIn(user.uid)
      this.props.getUserData(user.uid)
      this.setState({loggedIn: false})
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log('this is the twitter login error', errorCode, errorMessage)
    });
  }

  signOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('you\'ve signed out')
    }).catch(function(error) {
      // An error happened.
      console.log('There has been an error with signing out', error);
    });
  }

  signUp() {
    this.setState({signup: !this.state.signup })
  }

  render() {
    return (
      <div>
        {this.props.authentication === '' ?
          <div>
            {this.state.signup === false ?
              <h2>Login</h2>
              :
              <h2>Sign Up</h2>
            }
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.email} onChange={this.handleChange} />
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="enter your password" />
              <input type="submit" value="Enter" />
            </form>

            {this.state.signup === false ?
              <button basic onClick={this.signUp}>Sign Up</button>
              :
              <div></div>
            }

            <button
              className="ui twitter button"
              onClick={() => {this.loginProvider(new firebase.auth.TwitterAuthProvider())}}
            >
              <i class="twitter icon"></i>
              Twitter Login
            </button>
          </div>
          :
          <div>
            {this.props.authentication === '' ?
              <Redirect to="/" />
              :
              <Redirect to="/dashboard" />
            }
          </div>
        }
      </div>
    )
  }
}

export default LoginView;

{/* <button className="ui inverted red button" onClick={this.signOut}>Log Out</button> */}

{/* <div>
  <h2>Sign Up</h2>
  <form onSubmit={this.handleSubmit}>
    <input type="text" value={this.state.email} onChange={this.handleChange} />
    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="enter your password" />
    <input type="submit" value="Enter" />
  </form>
  <button onClick={this.signUp}>Or Login</button>
  <button
    onClick={() => {this.loginProvider(new firebase.auth.TwitterAuthProvider())}}
    >
      Twitter Login
    </button>
  </div> */}
