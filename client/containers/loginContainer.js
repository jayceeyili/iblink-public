import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginView from '../components/authentication/LoginView.jsx';
import * as authenticateActionCreators from '../actions/authenticationActions.js';

// import AudienceCarouselView from '../components/audience_live_view/AudienceCarouselView.jsx';
// import * as bookmarkActionCreators from '../actions/bookmarkActions.js';
// import * as socketActionCreators from '../actions/socketAction.js';

const mapStateToProps = (state) => {
  return {
    userId: state.userState.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authenticateActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
