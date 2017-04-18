import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImageGallery from 'react-image-gallery';

class AudienceCarouselView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audienceImages: null
    };

    this.setAudienceAccess = this.setAudienceAccess.bind(this);
  }

  componentWillMount() {
    this.setAudienceAccess(this.props.maxSlide);
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
  }

  handleSlideChange() {
    this.props.getCurrentAudienceSlide(this.ImageGallery.state.currentIndex);
    fetch('/audience_presentation/get_bookmarks')
    .then(response => response.json())
    .then((bookmarkedSlides) => {
      // console.log('bookmarked: ', bookmarkedSlides);
      console.log('Does bookmarkedSlides includes this.state.images[this.ImageGallery.state.currentIndex]?', JSON.stringify(bookmarkedSlides[0]) === JSON.stringify(this.state.images[this.ImageGallery.state.currentIndex]));
      // if (JSON.stringify(bookmarkedSlides[0]) === JSON.stringify(this.state.images[this.ImageGallery.state.currentIndex])) {
      //   this.props.changeBookmarkButtonColor('purple');
      // } else {
      //   this.props.changeBookmarkButtonColor('black');
      // }

      for (var i = 0; i < bookmarkedSlides.length; i++) {
        if (JSON.stringify(bookmarkedSlides[i]) === JSON.stringify(this.state.images[this.ImageGallery.state.currentIndex])) {
          console.log('changing to purple');
          this.props.changeBookmarkButtonColor('purple');
          break;
        } else {
          console.log('changing to black');
          this.props.changeBookmarkButtonColor('black');
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
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
            />
          </section> :
          <Redirect to="/dashboard" />
        }
      </div>
    );
  }
}

export default AudienceCarouselView;
