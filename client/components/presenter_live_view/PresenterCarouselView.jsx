import React from 'react';
import ImageGallery from 'react-image-gallery';

class PresenterCarouselView extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in constructor:', props);
    // this.props
  }

  componentWillMount() {
    console.log('in willmount, this props:', this.props);
    this.props.broadcastMiddleware();
  }

  render() {
    return (
      <div>
        <ImageGallery
          items={this.props.images}
          slideInterval={2000}
          onImageLoad={event => event.preventDefault()}
          onSlide={this.props.onSlideChange}
          showIndex
        />
      </div>
    );
  }
}

export default PresenterCarouselView;
