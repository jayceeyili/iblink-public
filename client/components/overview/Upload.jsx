import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);


    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload() {
    console.log('Upload request detected!');


    this.uploadWidget = cloudinary.openUploadWidget({
      upload_preset: 'nl29au84',
      cloud_name: 'iblink',
      button_caption: 'Upload slides',
      theme: 'minimal',
      sources: ['local'],
      text:
      {
        'sources.local.title': 'Your presentations',
        'sources.local.drop_files': 'Drop all slides here',
        'sources.local.drop_or': 'Or',
        'sources.local.select_files': 'Select all slides',
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
        }
      // this.uploadWidget.close();
      });

    // this.uploadWidget.open();
  }

  render() {
    const style = {
      color: 'black',
      textAlign: 'center'
    };

    return (
      <div>
        <button style={style} onClick={this.handleUpload}>Upload a presentation</button>
      </div>
    );
  }
}

export default Upload;
