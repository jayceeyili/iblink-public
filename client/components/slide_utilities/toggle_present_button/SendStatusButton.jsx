import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Promise from 'bluebird';
import { Button,Icon } from 'semantic-ui-react';
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
        {!this.state.presenterIsOn ?

            <Button
              basic
              color='red'
              size='massive'
              onClick={this.handlePresentButton}>End Presentation
            </Button>
            :
            <Button
              basic
              color='green'
              size='massive'
              onClick={this.handlePresentButton}>Start Presentation
            </Button>
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
