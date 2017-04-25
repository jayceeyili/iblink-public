import React, { Component }from 'react';

class Notes extends Component {
  constructor( props ) {
    super( props )

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleUpdate = this.handleUpdate.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
    this.handleChange = this.handleChange.bind( this );
  }

  handleSubmit() {
    event.preventDefault();
    let body = {
      userId: this.props.userId,
      note: this.props.note,
      slideId: this.props.slideId
    }
    this.props.addNote( body );
  }

  handleUpdate() {
    event.preventDefault();
    let body = {
      userId: this.props.userId,
      note: this.props.note,
      slideId: this.props.slideId
    }
    this.props.updateNote( body );
  }

  handleDelete() {
    event.preventDefault();
    let body = {
      userId: this.props.userId,
      slideId: this.props.slideId
    }
    this.props.deleteNote( body );
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
        <button
          style={ style }
          onClick={ this.handleUpdate }
        >Update</button>
        <button
          style={ style }
          onClick={ this.handleDelete }
        >Delete</button>
      </div>
    )
  }
}

export default Notes;
