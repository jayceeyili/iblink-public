import React from 'react';
import { Route, Redirect } from 'react-router';
import { Button, Icon, Divider, Form, Modal, Segment } from 'semantic-ui-react';
import style from './style.css';
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
    this.goBack = this.goBack.bind(this)

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
    firebase.auth().signOut().then( () => {
      // Sign-out successful.
      this.props.loggedIn("")
      console.log('you\'ve signed out')
    }).catch(function(error) {
      // An error happened.
      console.log('There has been an error with signing out', error);
    });
  }

  signUp() {
    this.setState({signup: !this.state.signup })
  }

  goBack() {
    this.setState({signup: !this.state.signup})
  }


  render() {
    const modalButton = `${style.modalButton}`
    const signuptitle = `${style.signuptitle}`

    return (
      <div>
        {this.props.authentication === '' ?

        <Modal
          trigger={ <Button
                    id={modalButton}
                    className='ui primary button'
                    size='big'
                    fluid
                    >
                      Sign In
                    </Button>}
        >
          <Modal.Content
          >
            {this.props.authentication === '' ?
              <div>
                {this.state.signup === false ?
                  <h2 className={signuptitle}>Login</h2>
                  :
                  <h2 className={signuptitle}>Sign Up</h2>
                }

                <Form
                  size='big'
                  onSubmit={this.handleSubmit}
                >
                    <Form.Field
                      label='Email'
                      control='input'
                      placeholder='ex: johnsmith@gmail.com'
                      width={16}
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      label='Password'
                      type='password'
                      control='input'
                      placeholder='at least 6 characters'
                      width={16}
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                    />
                  <Segment padded>
                    <Button type='submit' fluid>
                      Login
                    </Button>

                    <Divider />

                    <Button
                      color='twitter'
                      onClick={() => {this.loginProvider(new firebase.auth.TwitterAuthProvider())}}
                      fluid
                    >
                      <Icon name='twitter' /> Twitter Login
                    </Button>

                    <Divider />

                    {this.state.signup === false ?
                        <Button
                          secondary
                          onClick={this.signUp}
                          fluid
                        >
                          <Icon name='sign in' />
                          Sign Up
                        </Button>
                        :
                        <Button
                          secondary
                          onClick={this.goBack}
                          fluid
                        >
                          Back To Login
                        </Button>
                      }
                  </Segment>
                </Form>


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
          </Modal.Content>
        </Modal>
        :
        <Button
          negative
          onClick={this.signOut}
          id={modalButton}
          size='big'
          fluid
        >
          <Icon name="sign out"/>
          Sign Out
        </Button>
      }
      </div>
    )
  }
}

export default LoginView;
