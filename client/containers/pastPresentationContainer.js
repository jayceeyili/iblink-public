import React from 'react';
import { connect } from 'react-redux';
import pastPresentationView from '../components/past_presentation/PastPresentationView.jsx';

const mapStateToProps = (state) => {
  // console.log('in past pres container. Is there valid selectedPresentationIndex? state is:', state);
  const noPresentations = state.presentations.length === 0;
  return {
    noPresentations,
    title: state.presentations[state.selectedPresentationIndex].title
  };
};


export default connect(mapStateToProps, () => {} )(pastPresentationView);
