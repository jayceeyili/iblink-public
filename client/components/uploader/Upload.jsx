import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload() {
    console.log('Upload request detected!');

    const newPresentation = {};
    newPresentation.title = 'My presentation';  // TODO: Ask for a presentation title

    this.uploadWidget = cloudinary.openUploadWidget({
      upload_preset: 'nl29au84',
      cloud_name: 'iblink',
      button_caption: 'Upload slides',
      theme: 'minimal',
      sources: ['local'],
      text:
      {
        'sources.local.title': 'Presentations',
        'sources.local.drop_files': 'Drop all slides here',
        'sources.local.drop_or': 'Or',
        'sources.local.select_files': 'Select all',
        'progress.retry_upload': 'Please try again',
        'progress.failed_note': 'Some of your slides failed uploading.'
      }
    },
      (error, result) => {
        if (error) {
      	  console.error('Error in upload:', error);
        } else {
          console.log('Upload successful! Result:', result);
          // update the state to add this presentation to the user's set
          // send the presentation to the server
          const newSlides = result.map((slide) => {
            const newSlide = {};
            // newSlide.height = slide.height;
            // newSlide.original_filename = slide.original_filename;
            newSlide.secure_url = slide.secure_url;
            newSlide.thumbnail_url = slide.thumbnail_url;
            // newSlide.url = slide.url;
            // newSlide.width = slide.width;
            console.log('mapping to:', newSlide);
            return newSlide;
          });
          console.log('newSlides is:', newSlides);
          newPresentation.slides = newSlides;
          this.props.uploadPresentation(newPresentation);
        }
      });
  }

  render() {
    const style = {
      color: 'white',
      textAlign: 'center',
      float: 'right',
      clear: 'left'
    };

    return (
      <div>
        <button className="btn btn-primary" style={style} onClick={this.handleUpload}>Upload a presentation +</button>
      </div>
    );
  }
}

export default Upload;
