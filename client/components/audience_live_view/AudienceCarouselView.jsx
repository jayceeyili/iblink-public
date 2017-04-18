import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImageGallery from 'react-image-gallery';

import * as bookmarkActionCreators from './../../actions/bookmarkActions';
import * as carouselActionCreators from './../../actions/carouselActions';

class CarouselView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      audienceImages: [],
      maxSlide: this.props.maxSlide || 0
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.getPresentations = this.getPresentations.bind(this);
    this.audienceAccess = this.audienceAccess.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  componentDidMount() {
    this.getPresentations();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.maxSlide !== nextProps.maxSlide) {
      this.audienceAccess(nextProps.maxSlide);
    }
  }

  getPresentations() {
    return fetch('/presentations')
      .then(response => response.json())
      .then((slides) => {
        this.setState({ images: slides });
        this.audienceAccess(this.state.maxSlide);
        this.props.getSlides(slides);
        this.handleSlideChange();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  audienceAccess(maxSlide) {
    const temp = [];
    for (let i = 0; i <= maxSlide; i++) {
      temp.push(this.state.images[i]);
    }
    this.setState({ audienceImages: temp });
  }

  handleImageLoad(event) {
    // console.log('Image loaded ', event.target);
  }

  handleSlideChange() {
    this.props.getCurrentAudienceSlide(this.ImageGallery.state.currentIndex);
  }

  render() {
    return (
      <div>
        { this.props.audienceIsOn ?
          <section className="image-gallery-container">
            <ImageGallery
              ref={(ImageGallery) => { this.ImageGallery = ImageGallery; }}
              items={this.state.audienceImages}
              slideInterval={2000}
              onImageLoad={this.handleImageLoad}
              showIndex
              onSlide={this.handleSlideChange}
            />
          </section> :
          <Redirect to="/dashboard" />
        }
      </div>
    );
  }
}

const bundledActionCreators = Object.assign({},
                                          bookmarkActionCreators,
                                          carouselActionCreators
                                        );

const mapStateToProps = state => ({
  bookmarks: state.bookmarks,
  slides: state.slides,
  presenterIsOn: state.sockets.presenterIsOn
});

const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CarouselView);
