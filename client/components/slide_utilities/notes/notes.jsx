import React, { Component }from 'react';
import style from './style.css'

class Notes extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    let body = {
      userId: this.props.userId,
      note: this.state.text,
      slideId: this.props.slideId
    }
    if ( this.state.text ) {
      this.props.addNote( body );
    } else {
      console.error( 'Sorry, please enter your note first' );
    }
  }

  handleUpdate() {
    event.preventDefault();
    let body = {
      userId: this.props.userId,
      note: this.state.text,
      slideId: this.props.slideId
    }

    if (this.state.text) {
      this.props.updateNote(body);
    } else {
      console.error('Input filed cannot be empty');
    }
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

  handleChange(ev) {
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
    const textArea = `${style.textArea}`
    const addNote = `btn btn-basic ${style.button}`
    const updateNote = `btn btn-info ${style.button}`
    const deleteNote = `btn btn-danger ${style.button}`

    return (
      <div>
        {
          !this.props.note ?
          <div>
            <textarea
              className={textArea}
              type="text"
              placeholder='take some notes!'
              value={this.props.text}
              onChange={this.handleChange}
            ></textarea>
            <div>
              <button
                className={addNote}
                onClick={this.handleSubmit}
              >
                Add Note
              </button>
            </div>
          </div>
          :
          <div>
            <textarea
              className={textArea}
              type="text"
              placeholder='take some notes!'
              value={this.props.text}
              onChange={this.handleChange}
            ></textarea>
            <span>
              <button
                className={updateNote}
                onClick={this.handleUpdate}
              >Update</button>
              <button
                className={deleteNote}
                onClick={this.handleDelete}
              >Delete</button>
            </span>
          </div>
        }
      </div>
    )
  }
}

export default Notes;
