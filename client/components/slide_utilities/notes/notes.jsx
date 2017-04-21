import React, { Component }from 'react';

class Notes extends Component {
  constructor( props ) {
    super( props )

    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleSubmit() {
    console.log('fired!');
  }

  render() {
    const style = {
      'color': 'black',
      'textAlign': 'center'
    }

    return (
      <div>
        <input style={ style } placeholder='Add Note here'></input>
        <button style={ style } onClick={ this.handleSubmit }>Add</button>
      </div>
    )
  }
}

export default Notes;
