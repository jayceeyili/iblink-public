import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as socketActionCreators from '../actions/socketAction.js';
import FeaturesContainer from '../components/slide_utilities/index.jsx';
import styles from '../components/audience_live_view/style.css';
import CarouselView from '../components/audience_live_view/AudienceCarouselView.jsx';
class AudiencePresentationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // styles for container
    // TODO: fix so it becomes a pure container without CSS?
    const centered = { textAlign: 'center' };
    const container = `${styles.image}`;
    const bookmark = `${styles.bookmark}`;

    return (
      <div>
        <h1 style={centered}>MVP Presentation</h1>
        <section className={container}>
          <CarouselView
            maxSlide={this.props.maxSlide}
            audienceIsOn={this.props.audienceIsOn}
          />
        </section>
        <section className={bookmark}>
          <FeaturesContainer />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  maxSlide: state.sockets.receivedUrlId,
  audienceIsOn: state.sockets.audienceIsOn
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(AudiencePresentationContainer);
