import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Promise from 'bluebird';
import store from '../../../pages/store.js'
>>>>>>> (refactor) changing how state is dealt with using redux
import { SendStatus } from './../../../actions/socketAction';

class SendStatusButton extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   presenterIsOn: true
    // }
    this.handlePresentButton = this.handlePresentButton.bind(this);
  }

  handlePresentButton() {
    this.props.SendStatus();
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

    // this.setState({presenterIsOn: !this.state.presenterIsOn}, () => {
    //   if (!this.state.presenterIsOn) {
    //     console.log('presenterIsOn === false');
    //     fetch('/audience_presentation/store_bookmark')
    //     .then(response => response.json())
    //     .then((bookmarkedSlides) => {
    //       console.log('GET to /audience_presentation/store_bookmark is receiving response');
    //       console.log('bookmarked: ', bookmarkedSlides);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   }
    // });
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
