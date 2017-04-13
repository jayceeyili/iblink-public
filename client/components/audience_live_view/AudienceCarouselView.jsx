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
      pointer: 0
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.getPresentations = this.getPresentations.bind(this);
    this.audienceAccess = this.audienceAccess.bind(this);
    this.getPointer = this.getPointer.bind(this);
    // this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  componentDidMount() {
    this.getPresentations();
    this.getPointer();
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

  getPointer() {
    return fetch('/audience_presentation')
      .then(response => response.json())
      .then((data) => {
        this.setState({ pointer: data });
        this.audienceAccess(data);
      })
      .catch((err) => {
        console.log('There has been an error to get your slides position', err);
      })
  }

  audienceAccess(pointer) {
    var temp = []
    for (var i = 0; i <= pointer; i++) {
      temp.push(this.state.images[i]);
    }
    this.setState({audienceImages: temp});
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target);
  }

  // handleSlideChange() {
  //   console.log(this.ImageGallery.state.currentIndex)
  //   this.props.getCurrentIndex(this.ImageGallery.state.currentIndex);
  // }

  render() {
    return (
      <div>
        <ImageGallery
          ref={(ImageGallery) => { this.ImageGallery = ImageGallery; }}
          items={this.state.audienceImages}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          // onSlide={this.handleSlideChange}
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
