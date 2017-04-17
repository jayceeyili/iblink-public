import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import store from '../../../pages/store.js';
import * as bookmarkActionCreators from './../../../actions/bookmarkActions';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   buttonColor: 'red'
    // };
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
  }

  handleAddBookmark(event) {
    event.preventDefault();
    this.props.addBookmark(this.props.bookmarks.currentAudienceSlide);
  }

  render() {
    return (
      <div>
        <button className="btn btn-icon btn-info" onClick={this.handleAddBookmark} style={{ backgroundColor: this.props.bookmarkButtonColor }}><span className="glyphicon glyphicon-bookmark active" >Bookmark</span></button>
      </div>
    );
  }
}

const bundledActionCreators = Object.assign({},
                                          bookmarkActionCreators
                                        );

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(bundledActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
