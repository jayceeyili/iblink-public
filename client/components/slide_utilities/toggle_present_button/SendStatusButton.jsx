import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Promise from 'bluebird';
import store from '../../../pages/store.js'
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
    this.setState({presenterIsOn: !this.state.presenterIsOn}, () => {
      if (!this.state.presenterIsOn) {
        fetch('/audience_presentation/store_bookmark')
        .then(response => response.json())
        .then((bookmarkedSlides) => {
          console.log('bookmarked: ', bookmarkedSlides);
        })
        .catch((error) => {
          console.error(error);
        });
      }
    });
  }

  render() {
    return (
      <div>
        {
          this.props.presenterIsOn ?
            <button type="button" className="btn btn-danger"
              onClick={ this.props.SendStatus }>End Presentation
            </button> :
          <button type="button" className="btn btn-success"
            onClick={ this.props.SendStatus }>Start Presentation
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
