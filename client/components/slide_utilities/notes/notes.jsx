import React, { Component }from 'react';

class Notes extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleUpdate = this.handleUpdate.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
    this.handleChange = this.handleChange.bind( this );
    this.clearText = this.clearText.bind( this );
  }

  handleSubmit() {
    event.preventDefault();
    let body = {
      userId: this.props.userId,
      note: this.state.text,
      slideId: this.props.slideId
    }
    this.props.addNote( body );
  }

  handleUpdate() {
    event.preventDefault();
    let body = {
      userId: this.props.userId,
      note: this.state.text,
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
    this.clearText();
  }

  handleChange( ev ) {
    let text = ev.target.value;
    this.setState( {
      text: text
    } )
  }

  clearText() {
    this.setState( {
      text: ''
    } )
  }

  render() {
    const style = {
      'color': 'black',
      'textAlign': 'center'
    }

    return (
      <div>
      {
        !this.props.note ?
        <div>
          <input
            type="text"
            style={ style }
            placeholder='Add Note here'
            value={ this.state.text }
            onChange={ this.handleChange }
            ></input>
          <button
            style={ style }
            onClick={ this.handleSubmit }
          >Add</button>
        </div> :
        <div>
          <input
            type="text"
            style={ style }
            placeholder={ this.props.note }
            value={ this.state.text }
            onChange={ this.handleChange }
            ></input>
          <span>
            <button
              style={ style }
              onClick={ this.handleUpdate }
            >Update</button>
            <button
              style={ style }
              onClick={ this.handleDelete }
            >Delete</button>
          </span>
        </div>
      }
      </div>
    )
  }
}

export default Notes;
