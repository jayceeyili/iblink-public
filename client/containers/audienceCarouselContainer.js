import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AudienceCarouselView from '../components/audience_live_view/AudienceCarouselView.jsx';
// import * as socketActionCreators from '../actions/socketAction.js';

const mapStateToProps = (state) => {
  // TODO: bring channel-related socket logic to livePresentation
  const maxSlide = state.sockets.receivedUrlId || state.livePresentation.maxSlideIndex;
  return {
    maxSlide,
    audienceIsOn: state.sockets.audienceIsOn,
    images: state.presentations[state.selectedPresentationIndex].slides
  };
};

export default connect(mapStateToProps)(AudienceCarouselView);
