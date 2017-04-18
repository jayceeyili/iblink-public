import React from 'react';
import { connect } from 'react-redux';

import PresenterCarouselView from '../components/presenter_live_view/PresenterCarouselView.jsx';
import { broadcastMiddleware } from '../socketOn';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToprops, state:', state);
  return {
    images: state.presentations[state.selectedPresentationIndex].slides
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  broadcastMiddleware,  // same as ProductsContainer's addToCart of redux shopping cart example

  onSlideChange: (index) => {
    dispatch(sendURL, index);
    // could be tricky to get state here,
    // use recompose or thunk?
    // https://github.com/reactjs/react-redux/issues/535

    if (index > store.maxSlide) {
      dispatch(maxSlide, index);
    }
  }
});

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
