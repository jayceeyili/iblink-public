import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';

import * as bookmarkActionCreators from './../../../actions/bookmarkActions';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickBookmark = this.handleClickBookmark.bind(this);
  }

  handleClickBookmark(event) {
    event.preventDefault();
    if (!this.props.bookmarks.bookmarks.includes(this.props.bookmarks.currentAudienceSlide)) {
      console.log('BOOKMARK PROPS: ', this.props);
      this.props.addBookmark(this.props.bookmarks.currentAudienceSlide, this.props.userId, this.props.presentationId);
      this.props.changeBookmarkButtonColor('purple');
    } else {
      this.props.removeBookmark(this.props.bookmarks.currentAudienceSlide, this.props.userId, this.props.presentationId);
      this.props.changeBookmarkButtonColor('black');
    }
  }

  //this.props.bookmarks.bookmarkButtonColor

  render() {
    return (
      <div>
        {this.props.bookmarks.bookmarkButtonColor === "black" ?
          <Button onClick={this.handleClickBookmark} basic>
            <Icon name="bookmark" size="big"/>
            Bookmark
          </Button>
          :
          <Button onClick={this.handleClickBookmark} basic color='red'>
            <Icon name="remove bookmark" color="red" size="big"/>
            Unbookmark
          </Button>

        }
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
