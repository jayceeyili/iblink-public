import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AudiencePresentationContainer from './containers/audiencePresentationContainer.jsx';
import * as authenticateActionCreators from '../actions/authenticationActions.js';

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication.userId,
    audienceCheck: state.sockets.channel
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authenticateActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AudiencePresentationContainer);
