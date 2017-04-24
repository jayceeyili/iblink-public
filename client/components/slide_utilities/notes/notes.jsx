import React, { Component }from 'react';
import style from './style.css'

class Notes extends Component {
  constructor( props ) {
    super( props )

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleChange = this.handleChange.bind( this );
  }

  handleSubmit() {
    event.preventDefault();
    let body = {
      presentationId: this.props.presentationId,
      userId: this.props.userId,
      note: this.props.note,
      slideId: this.props.slideId
    }
    // console.log(this.props);
    this.props.addNote( body );
  }

  handleChange( ev ) {
    let text = ev.target.value;
    this.props.updateText( text );
  }

  render() {
    const textArea = `${style.textArea}`
    const button = `btn btn-basic ${style.button}`

    return (
      <div>
        <textarea
          className={ textArea }
          type="text"
          placeholder='take some notes!'
          value={ this.props.text }
          onChange={ this.handleChange }
        ></textarea>
        <div>
          <button
            className={ button }
            onClick={ this.handleSubmit }
          >
            Add Note
          </button>
        </div>

      </div>
    )
  }
}

export default Notes;
