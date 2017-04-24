import React from 'react';
import ImageGallery from 'react-image-gallery';

class PresenterCarouselView extends React.Component {
  constructor(props) {
    super(props);
    // console.log('props in constructor:', props);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  componentWillMount() {
    // console.log('in willmount, this props:', this.props);
    this.props.sendURL;
  }

  handleImageLoad(event) {
    event.preventDefault();
    this.props.getCurrentAudienceSlide(this.ImageGallery.state.currentIndex);
  }

  handleSlideChange() {
    this.props.sendURL(this.ImageGallery.state.currentIndex);
    this.props.getCurrentAudienceSlide(this.ImageGallery.state.currentIndex);
    if (this.props.bookmarks.bookmarks.includes(this.ImageGallery.state.currentIndex)) {
      this.props.changeBookmarkButtonColor('purple');
    } else {
      this.props.changeBookmarkButtonColor('black');
    }
  }

  render() {
    const spanStyle = {
      color: 'blue'
    };

    let audienceURL = `www.iblink.net/${ this.props.channel }`;

    return (
      <div>
        <ImageGallery
          ref={(ImageGallery) => { this.ImageGallery = ImageGallery; }}
          items={this.props.images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          onSlide={this.handleSlideChange}
          showIndex
        />
        {
          !this.props.presenterIsOn &&
          <span style={ spanStyle }>{ audienceURL }</span>
        }
      </div>
    );
  }
}

export default PresenterCarouselView;
