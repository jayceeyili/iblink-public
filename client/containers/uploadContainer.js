import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Upload from '../components/uploader/Upload.jsx';
import { uploadPresentation } from '../actions/presentationActions.js';

const mapStateToProps = state => ({
  authorId: state.authentication.userId
});

// const mapDispatchToProps = dispatch => bindActionCreators(uploadPresentation, dispatch);

export default connect(mapStateToProps, { uploadPresentation })(Upload);
