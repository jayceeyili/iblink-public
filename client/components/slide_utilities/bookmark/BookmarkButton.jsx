import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as bookmarkActionCreators from './../../../actions/bookmarkActions';
import style from './bookmark-button.css'

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickBookmark = this.handleClickBookmark.bind(this);
  }

  handleClickBookmark(event) {
    event.preventDefault();
    if (!this.props.bookmarks.bookmarks.includes(this.props.bookmarks.currentAudienceSlide)) {
      this.props.addBookmark(this.props.bookmarks.currentAudienceSlide, this.props.userId, this.props.slides[this.props.bookmarks.currentAudienceSlide].id);
      this.props.changeBookmarkButtonColor('purple');
    } else {
      this.props.removeBookmark(this.props.bookmarks.currentAudienceSlide, this.props.userId, this.props.slides[this.props.bookmarks.currentAudienceSlide].id);
      this.props.changeBookmarkButtonColor('black');
    }
  }

  //this.props.bookmarks.bookmarkButtonColor

  render() {
    const bookmarkedButton = `${style.btn} ui button`;
    const unbookmarkedButton = `${style.btn} ui twitter button`;
    const inline = `${style.inline}`
    return (
      <div>
        {this.props.bookmarks.bookmarkButtonColor === "black" ?
          <Button onClick={this.handleClickBookmark} className={bookmarkedButton}>
            <span>
              <Icon className={inline} name="bookmark" size="big" />
              <p className={inline}>Bookmark</p>
            </span>
          </Button>
          :
          <Button onClick={this.handleClickBookmark} className={unbookmarkedButton}>
            <span>
              <Icon className={inline} name="remove bookmark" size="big" />
              <p className={inline}>Unbookmark</p>
            </span>
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
