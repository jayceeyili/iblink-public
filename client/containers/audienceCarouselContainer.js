import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AudienceCarouselView from '../components/audience_live_view/AudienceCarouselView.jsx';
import * as bookmarkActionCreators from '../actions/bookmarkActions.js';
import * as socketActionCreators from '../actions/socketAction.js';

const mapStateToProps = (state) => {
  return {
    maxSlide: state.sockets.receivedUrlId,
    channel: state.sockets.channel,
    audienceIsOn: state.sockets.audienceIsOn,
    images: state.presentations[state.selectedPresentationIndex].slides,
    bookmarks: state.bookmarks
  };
};

const bundledActionCreators = Object.assign({},
                                          bookmarkActionCreators,
                                          socketActionCreators
                                        );

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(bundledActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AudienceCarouselView);
