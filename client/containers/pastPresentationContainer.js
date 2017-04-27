import React from 'react';
import { connect } from 'react-redux';
import pastPresentationView from '../components/past_presentation/PastPresentationView.jsx';

const mapStateToProps = (state) => {
  // console.log('in past pres container. Is there valid selectedPresentationIndex? state is:', state);
  var noPresentations, title;

  if (state.presentations.length === 0) {
  	noPresentations = true;
  	title = '';
  } else {
    noPresentations = false;
    title = state.presentations[state.selectedPresentationIndex].title;
  }
  return {
    noPresentations,
    title,
    authentication: state.authentication.userId
  };
};

export default connect(mapStateToProps, () => {} )(pastPresentationView);
