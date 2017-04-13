import React from 'react';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActionCreators from './../../actions/bookmarkActions';

class PresenterCarouselView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      index: [0],
      pointer: 0
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.getPresentations = this.getPresentations.bind(this);
    this.sendPointer = this.sendPointer.bind(this);
  }

  componentWillMount() {
    this.getPresentations();
    this.sendPointer();
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

  handleImageLoad(event) {
    event.preventDefault();
    console.log('Image loaded ', event.target);
  }

  handleSlideChange() {
    // this.props.getCurrentIndex(this.ImageGallery.state.currentIndex);
    this.setState({
      index: this.state.index.concat(this.ImageGallery.state.currentIndex)
    }, () => {
      this.setState({ pointer: Math.max.apply(null, this.state.index) }, () => {
        this.sendPointer();
      });
    });

    console.log('current slide: ' , this.ImageGallery.state.currentIndex);

  }

  sendPointer() {
    return fetch('/audience_presentation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pointer: this.state.pointer
      })
    })
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <ImageGallery
          ref={(ImageGallery) => { this.ImageGallery = ImageGallery; }}
          items={this.state.images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          onSlide={this.handleSlideChange}
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


export default connect(mapStateToProps, mapDispatchToProps)(PresenterCarouselView);
