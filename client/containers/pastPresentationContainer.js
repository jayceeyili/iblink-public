import React from 'react';
import { connect } from 'react-redux';
import pastPresentationView from '../components/past_presentation/PastPresentationView.jsx';

const mapStateToProps = (state) => {
  const noPresentations = state.presentations.length === 0;
  return {
    noPresentations
  };
};


export default connect(mapStateToProps)(pastPresentationView);
