import React from 'react';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActionCreators from './../../actions/bookmarkActions';
import * as socketActionCreators from './../../actions/socketAction.js';
import * as presentationActionCreators from './../../actions/presentationActions.js';

const PresenterCarouselView = () => {

  componentWillMount() {
    this.sendMaxSlide();
  }

  handleImageLoad(event) {
    event.preventDefault();
    console.log('Image loaded ', event.target);
  }

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

  render() {
    return (
      <div>
        <ImageGallery
          ref={(ImageGallery) => { this.ImageGallery = ImageGallery; }}
          items={this.state.images}
          slideInterval={2000}
          onImageLoad={(event) => event.preventDefault() }
          onSlide={this.handleSlideChange}
          showIndex
        />
      </div>
    );
  }
}

export default PresenterCarouselView;
