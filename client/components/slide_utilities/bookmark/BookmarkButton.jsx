import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bookmarkActionCreators from './../../../actions/bookmarkActions';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: 'black'
    };
    this.handleClickBookmark = this.handleClickBookmark.bind(this);
  }

  handleClickBookmark(event) {
    event.preventDefault();
    console.log('this.props.bookmarks.currentAudienceSlide: ', this.props.bookmarks.currentAudienceSlide);

    if (!this.props.bookmarks.bookmarks.includes(this.props.bookmarks.currentAudienceSlide)) {
      this.props.addBookmark(this.props.bookmarks.currentAudienceSlide);
      this.props.changeBookmarkButtonColor('purple');
    } else {
      this.props.removeBookmark(this.props.bookmarks.currentAudienceSlide);
      this.props.changeBookmarkButtonColor('black');
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickBookmark} style={{ backgroundColor: this.props.bookmarks.bookmarkButtonColor }}>Bookmark</button>
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
