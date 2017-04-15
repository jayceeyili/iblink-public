import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Promise from 'bluebird';
<<<<<<< 1731fdc3e6d689f7cf683d2dfa0b57455bd00249
import store from '../../../pages/store.js'
=======
>>>>>>> (fix) fixed bookmarking log
import { SendStatus } from './../../../actions/socketAction';

class SendStatusButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presenterIsOn: true
    }
    this.handlePresentButton = this.handlePresentButton.bind(this);
  }

  handlePresentButton() {
<<<<<<< 1731fdc3e6d689f7cf683d2dfa0b57455bd00249
    this.props.SendStatus();
    this.setState({presenterIsOn: !this.state.presenterIsOn}, () => {
      if (!this.state.presenterIsOn) {
        fetch('/audience_presentation/store_bookmark')
        .then(response => response.json())
        .then((bookmarkedSlides) => {
=======
    this.setState({presenterIsOn: !this.state.presenterIsOn}, () => {
      if (!this.state.presenterIsOn) {
        console.log('presenterIsOn === false');
        fetch('/audience_presentation/store_bookmark')
        .then(response => response.json())
        .then((bookmarkedSlides) => {
          console.log('GET to /audience_presentation/store_bookmark is receiving response');
>>>>>>> (fix) fixed bookmarking log
          console.log('bookmarked: ', bookmarkedSlides);
        })
        .catch((error) => {
          console.error(error);
        });
      }
    });
<<<<<<< 1731fdc3e6d689f7cf683d2dfa0b57455bd00249
=======
    // this.props.SendStatus();
>>>>>>> (fix) fixed bookmarking log
  }

  render() {
    return (
      <div>
        {
          this.state.presenterIsOn ?
            <button type="button" className="btn btn-danger"
              onClick={this.handlePresentButton}>End Presentation
            </button> :
          <button type="button" className="btn btn-success"
            onClick={this.handlePresentButton}>Start Presentation
          </button>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    presenterIsOn: state.sockets.presenterIsOn
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    SendStatus
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SendStatusButton);
