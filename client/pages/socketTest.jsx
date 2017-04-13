import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateURL, sendURL, receiveURL } from './../actions/socketAction.js';

class SocketTest extends React.Component {
  constructor() {
    super();

    this.updateText = this.updateText.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this)
  }

  handleKeypress(e) {
  	// if (e.keyCode === 13) {
    //   this.props.sendURL( this.props.url )
  	// }
    // e.preventDefault();
    const currUrl = this.props.currUrl;
    this.props.sendURL(currUrl)
  }

  updateText(event) {
    this.props.updateURL( event.target.value );
	}

  render() {
    return (
      <div className="ui action input youin__message-box">
				<input type="text" placeholder="Image URL"
					value={ this.props.currUrl }
					onChange={ this.updateText }
        />
      <button className="ui button"
        onClick={ this.handleKeypress }>Send</button>
			</div>
    );
  }
}

// onKeyPress={ this.handleKeypress } />
// const bundledActionCreators = Object.assign({},
//                                           socketActionCreators
//                                         );

const mapStateToProps = (state) => {
  return {
    currUrl: state.sockets.sentUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateURL,
    receiveURL,
    sendURL
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SocketTest);
