import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PresenterCarouselView from '../components/presenter_live_view/PresenterCarouselView.jsx';
import * as bookmarkActionCreators from '../actions/bookmarkActions';
import * as socketActionCreators from '../actions/socketAction';


const mapStateToProps = (state) => {
  console.log('mapStateToprops, state:', state);
  return {
    images: state.presentations[state.selectedPresentationIndex].slides
    // bookmarks: state.bookmarks
  };
};

const bundledActionCreators = Object.assign({},
                                          // bookmarkActionCreators,
                                          socketActionCreators
                                        );

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresenterCarouselView);
