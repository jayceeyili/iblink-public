import React from 'react';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActionCreators from './../../actions/bookmarkActions';

class CarouselView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      audienceImages: [],
      maxSlide: 0
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.getPresentations = this.getPresentations.bind(this);
    this.audienceAccess = this.audienceAccess.bind(this);
    this.getMaxSlide = this.getMaxSlide.bind(this);
  }

  componentWillMount() {
    this.getPresentations();
    this.getMaxSlide();
  }

  getPresentations() {
    return fetch('/presentations')
      .then(response => response.json())
      .then((slides) => {
        this.setState({ images: slides });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getMaxSlide() {
    return fetch('/audience_presentation')
      .then(response => response.json())
      .then((data) => {
        this.setState({ maxSlide: data });
        this.audienceAccess(data);
      })
      .catch((err) => {
        console.log('There has been an error to get your slides position', err);
      })
  }

  audienceAccess(maxSlide) {
    var temp = []
    for (var i = 0; i <= maxSlide; i++) {
      temp.push(this.state.images[i]);
    }
    this.setState({audienceImages: temp});
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target);
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
