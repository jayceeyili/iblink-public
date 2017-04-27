import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AudiencePresentationContainer from './containers/AudiencePresentationContainer.jsx';
import * as authenticateActionCreators from '../actions/authenticationActions.js';

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authenticateActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AudiencePresentationContainer);
