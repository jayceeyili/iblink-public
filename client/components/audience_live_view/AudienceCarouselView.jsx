import React from 'react';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    this.getMaxSlide = this.getMaxSlide.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  componentWillMount() {
    this.getPresentations();
    // this.getMaxSlide();
  }

  componentWillUpdate( nextProps, nextState ) {
    console.log(this.nextState);
    if ( this.state.maxSlide !== nextState.maxSlide ) {
      this.audienceAccess(nextState.maxSlide);
    }
  }

  getPresentations() {
    return fetch('/presentations')
      .then(response => response.json())
      .then((slides) => {
        this.setState({ images: slides });
        this.props.getSlides(slides);
        this.handleSlideChange();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // getMaxSlide() {
    // return fetch('/audience_presentation')
    //   .then(response => response.json())
    //   .then((data) => {
    //     this.setState({ maxSlide: data });
        // this.audienceAccess(this.state.maxSlide);
    //   })
    //   .catch((err) => {
    //     console.log('There has been an error to get your slides position', err);
    //   })
  // }

  audienceAccess(maxSlide) {
    var temp = []
    for (var i = 0; i <= maxSlide; i++) {
      temp.push(this.state.images[i]);
    }
    this.setState({audienceImages: temp});
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
        <ImageGallery
          ref={(ImageGallery) => { this.ImageGallery = ImageGallery; }}
          items={this.state.audienceImages}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          showIndex={true}
          onSlide={this.handleSlideChange}
        />
      </div>
    );
  }
}

const bundledActionCreators = Object.assign({},
                                          bookmarkActionCreators,
                                          carouselActionCreators
                                        );

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks,
    slides: state.slides
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(bundledActionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(CarouselView);
