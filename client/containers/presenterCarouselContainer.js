import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PresenterCarouselView from '../components/presenter_live_view/PresenterCarouselView.jsx';
import * as currentSlideActionCreators from '../actions/slideActions';
import * as bookmarkActionCreators from '../actions/bookmarkActions';
import * as socketActionCreators from '../actions/socketAction';


const mapStateToProps = (state) => {
  return {
    currentSlideState: state.currentSlide,
    images: state.presentations[state.selectedPresentationIndex].slides,
    presenterIsOn: state.sockets.presenterIsOn,
    channel: state.sockets.channel,
    bookmarks: state.bookmarks
  };
};

const bundledActionCreators = Object.assign({},
                                          bookmarkActionCreators,
                                          socketActionCreators,
                                          currentSlideActionCreators
                                        );

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresenterCarouselView);
