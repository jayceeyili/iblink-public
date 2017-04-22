import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);


    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload() {
    console.log('Upload request detected!');

    this.uploadWidget = cloudinary.openUploadWidget({ upload_preset: 'nl29au84', cloud_name: 'iblink' },
      (error, result) => {
        if (error) {
      	console.error('Error in upload:', error);
        } else {
      	console.log('Upload successful! Result:', result);
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
