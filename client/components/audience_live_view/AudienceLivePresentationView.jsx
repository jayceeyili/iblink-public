import React from 'react';
import CarouselView from './AudienceCarouselView.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as socketActionCreators from './../../actions/socketAction.js';
import styles from './style.css'

class LivePresentationView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // styles for container
    const container = `${styles.image}`

    return (
      <div>
        <section className={container}>
          <CarouselView
            maxSlide={ this.props.maxSlide }
            audienceIsOn={ this.props.audienceIsOn }
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    maxSlide: state.sockets.receivedUrlId,
    audienceIsOn: state.sockets.audienceIsOn
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(LivePresentationView);
