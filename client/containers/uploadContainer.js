import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Upload from '../components/uploader/Upload.jsx';
import { uploadPresentation } as from '../actions/presentationActions.js';


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(uploadPresentation, dispatch);
};

export default connect(mapDispatchToProps)(Upload);
