import React from 'react';
import ImageGallery from 'react-image-gallery';

class PresenterCarouselView extends React.Component {
  constructor(props) {
    super(props);
    // console.log('props in constructor:', props);
  }

  componentWillMount() {
    // console.log('in willmount, this props:', this.props);
    this.props.sendURL;
  }

  render() {
    const spanStyle = {
      color: 'blue'
    };

    let audienceURL = `www.iblink.net/${ this.props.channel }`;

    return (
      <div>
        <ImageGallery
          items={this.props.images}
          slideInterval={2000}
          onImageLoad={event => event.preventDefault()}
          onSlide={this.props.sendURL}
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
