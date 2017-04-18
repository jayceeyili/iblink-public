import React from 'react';
import { connect } from 'react-redux';

import PresenterCarouselView from './PresenterCarouselView.jsx';


handleSlideChange() {
  this.setState({
    index: this.state.index.concat(this.ImageGallery.state.currentIndex)
  }, () => {
    this.setState({ maxSlide: Math.max.apply(null, this.state.index) }, () => {
      this.sendMaxSlide();
    });
  });
}

sendMaxSlide() {
  this.props.sendURL(this.state.maxSlide);
}


const mapStateToProps = (state, ownProps) => ({
  images: // get all images of the pres 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSlideChange: (index) => {
    dispatch(sendURL, index);
    if (index > store.maxSlide) {
      dispatch(maxSlide, index);
    }
  }
})

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});


const mapDispatchToProps = {
  on: toggleTodo
};

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
