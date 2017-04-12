import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class SocketTest extends React.Component {
  constructor(props) {
    super(props);

    this.updateText = this.updateText.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this)
  }

  handleKeypress(e) {
  	if (e.keyCode === 13) {
      this.props.onSubmit( this.props.value )
  	}
    e.preventDefault();
  }

  updateText(event) {
    this.props.onChange( event.target.value );
	}

  render() {
    return (
      <div className="ui action input youin__message-box">
				<input type="text" placeholder="Image URL"
					value={ this.props.value }
					onChange={ this.updateText }
					onKeyPress={ this.handleKeypress } />
				<button className="ui button"
					onClick={ this.props.onSubmit( this.props.value ) }>Send</button>
			</div>
    );
  }
}

// const bundledActionCreators = Object.assign({},
//                                           socketActionCreators
//                                         );
//
// const mapStateToProps = (state) => {
//   return {
//     socket: state.bookmarks
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(bundledActionCreators, dispatch);
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
