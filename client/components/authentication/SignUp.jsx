import React from 'react';
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

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

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

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage)
    });
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleChange} />
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="enter your password" />
          <input type="submit" value="Enter" />
        </form>
      </div>
    )
  }
}

export default Signup;
