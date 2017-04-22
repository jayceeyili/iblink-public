import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginView from '../components/authentication/LoginView.jsx';
import * as authenticateActionCreators from '../actions/authenticationActions.js';

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authenticateActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
