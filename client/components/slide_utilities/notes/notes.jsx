import React, { Component }from 'react';

class Notes extends Component {
  constructor( props ) {
    super( props )

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleChange = this.handleChange.bind( this );
  }



  handleSubmit() {
    let body = {
      text: this.props.text
    }
    this.props.addNote( body );
    event.preventDefault();
  }

  handleChange( ev ) {
    let text = ev.target.value;
    this.props.updateText( text );
  }

  render() {
    const style = {
      'color': 'black',
      'textAlign': 'center'
    }

    return (
      <div>
        <input
          type="text"
          style={ style }
          placeholder='Add Note here'
          value={ this.props.text }
          onChange={ this.handleChange }
        ></input>
        <button
          style={ style }
          onClick={ this.handleSubmit }
        >Add</button>
      </div>
    )
  }
}

export default Notes;
