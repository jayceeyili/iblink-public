import React from 'react';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActionCreators from './../../actions/bookmarkActions';

class CarouselView extends React.Component {
  constructor(props) {
    super(props);

    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.getPresentations = this.getPresentations.bind(this);
  }

  componentWillMount() {
    this.getPresentations();
  }

  getPresentations() {
    return fetch('/presentations')
      .then(response => response.json())
      .then((slides) => {
        return slides;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target);
  }

  handleSlideChange() {
    console.log(this.ImageGallery.state.currentIndex)
    this.props.getCurrentIndex(this.ImageGallery.state.currentIndex);
  }

  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];


    return (
      <div>
        <ImageGallery
          ref={(ImageGallery) => { this.ImageGallery = ImageGallery; }}
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          onSlide={this.handleSlideChange}
        />
      </div>
    );
  }
}

const bundledActionCreators = Object.assign({},
                                          bookmarkActionCreators
                                        );

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(bundledActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselView);
