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

