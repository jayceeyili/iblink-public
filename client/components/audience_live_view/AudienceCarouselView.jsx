import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImageGallery from 'react-image-gallery';

class AudienceCarouselView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audienceImages: null,
    };

    this.setAudienceAccess = this.setAudienceAccess.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  componentWillMount() {
    this.setAudienceAccess(this.props.maxSlide);
    this.props.CreateRoom( this.props.channel );

    let initialSlide = this.props.images[ 0 ];
    this.props.updateSlideState( initialSlide );
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.maxSlide !== nextProps.maxSlide) {
      this.setAudienceAccess(nextProps.maxSlide);
    }
  }

  setAudienceAccess(maxSlide) {
    const temp = [];
    for (let i = 0; i <= maxSlide; i++) {
      temp.push(this.props.images[i]);
        }
        this.setState({ audienceImages: temp });
      }

  handleImageLoad(event) {
    // console.log('Image loaded ', event.target);
    this.props.getCurrentAudienceSlide(this.ImageGallery.state.currentIndex);
  }

  handleSlideChange(index) {
    let currentSlide = this.props.images[index];
    this.props.updateSlideState(currentSlide);
    this.props.getCurrentAudienceSlide(index);

    if (this.props.bookmarks.bookmarks.includes(index)) {
      this.props.changeBookmarkButtonColor('purple');
    } else {
      this.props.changeBookmarkButtonColor('black');
    }
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
              onSlide={this.handleSlideChange}
              onImageLoad={this.handleImageLoad}
              showIndex
            />
          </section> :
          <Redirect to="/dashboard" />
        }
      </div>
    );
  }
}

export default AudienceCarouselView;
