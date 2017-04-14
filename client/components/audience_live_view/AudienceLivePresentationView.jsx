import React from 'react';
import CarouselView from './AudienceCarouselView.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as socketActionCreators from './../../actions/socketAction.js';

class LivePresentationView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CarouselView maxSlide={ this.props.maxSlide } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    maxSlide: state.sockets.receivedUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(LivePresentationView);
