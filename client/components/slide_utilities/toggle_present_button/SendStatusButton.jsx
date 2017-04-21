import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Promise from 'bluebird';
import { SendStatus, CreateRoom } from './../../../actions/socketAction';

class SendStatusButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presenterIsOn: true
    }
    this.handlePresentButton = this.handlePresentButton.bind(this);
  }

  handlePresentButton() {
    this.props.SendStatus();
    this.setState({presenterIsOn: !this.state.presenterIsOn}, () => {
      if (!this.state.presenterIsOn) {
        fetch('/audience_presentation/store_bookmarks')
        .then(response => response.json())
        .then((bookmarkedSlides) => {
          console.log('bookmarked: ', bookmarkedSlides);
        })
        .catch((error) => {
          console.error(error);
        });
      } else {
        fetch('/liveChannel')
        .then( response => response.json())
        .then( channel => this.props.CreateRoom( channel ) )
        .catch( error => console.error( error ));
      }
    });
  }

  render() {
    return (
      <div>
        {
          !this.state.presenterIsOn ?
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
    SendStatus,
    CreateRoom
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SendStatusButton);
