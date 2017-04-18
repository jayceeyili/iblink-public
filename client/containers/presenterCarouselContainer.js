import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PresenterCarouselView from '../components/presenter_live_view/presenterCarouselView.jsx';
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

// YourPresentationsContainer.propTypes = {
//   presentations: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     slides: PropTypes.array
//   })).isRequired,
//   selectPresentation: PropTypes.func.isRequired
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresenterCarouselView);
