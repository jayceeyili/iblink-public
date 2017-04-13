import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { togglePresent } from './../../../actions/socketAction';

class TogglePresentButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={ this.props.togglePresent }>{
            this.props.isOn ? 'End Presentation' : 'Start Presentation'
          }</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOn: state.sockets.isOn
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    togglePresent
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TogglePresentButton);
