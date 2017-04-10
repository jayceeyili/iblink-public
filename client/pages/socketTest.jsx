import React from 'react';
import io from 'socket.io-client';

export default class SocketTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputURL: '',
      socket: ''
    }

    this.broadcasting = this.broadcasting.bind(this)
    this.updateText = this.updateText.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this)
  }

  componentDidMount() {
    this.initSocket();
  }

  clearInput() {
    this.setState({
      inputURL: ''
    })
  }

  initSocket() {
    let socket = io();
    socket.on('connect', () => console.log( `Socket Id: ${ socket.id }` ));

    socket.on('broadcastSlide', data => {
      console.log('Sockets: Received new message: ', data);
    });

    this.setState({
      socket: socket
    });
  }

  broadcasting() {
    let inputURL = this.state.inputURL;

    this.state.socket.emit('broadcastSlide', inputURL);

    this.clearInput();
  }

  handleKeypress(e) {
  	if (e.nativeEvent.keyCode === 13) {
  		this.broadcasting();
  	}
  }

  updateText(event) {
		this.setState({
			inputURL: event.target.value
		});
	}

  render() {
    return (
      <div className="ui action input youin__message-box">
				<input type="text" placeholder="Image URL"
					value={ this.state.inputURL }
					onChange={ this.updateText }
					onKeyPress={ this.handleKeypress } />
				<button className="ui button"
					onClick={ this.broadcasting }>Send</button>
			</div>
    );
  }
}
