import React from 'react';
import ImageGallery from 'react-image-gallery';

class PresenterCarouselView extends React.Component {
  constructor(props) {
    super(props);
    // console.log('props in constructor:', props);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  componentDidMount() {
    let initialSlide = this.props.images[ 0 ];
    this.props.updateSlideState( initialSlide );
  }

  handleImageLoad(event) {
    event.preventDefault();
    this.props.getCurrentAudienceSlide(this.ImageGallery.state.currentIndex);
  }

  handleSlideChange(index) {
    this.props.sendURL(index);
    let currentSlide = this.props.images[index];
    this.props.updateSlideState( currentSlide );
    this.props.getCurrentAudienceSlide(index);
    if (this.props.bookmarks.bookmarks.includes(index)) {
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
