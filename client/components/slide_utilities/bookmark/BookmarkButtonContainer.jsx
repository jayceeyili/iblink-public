import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActionCreators from '../../../actions/bookmarkActions.js';
import BookmarkButton from './BookmarkButton.jsx';

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks,
    userId: state.authentication.userId
  };
};

const bundledActionCreators = Object.assign({},
                                          bookmarkActionCreators
                                        );

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(bundledActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
