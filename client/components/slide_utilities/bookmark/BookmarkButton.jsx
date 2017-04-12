import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bookmarkActionCreators from './../../../actions/bookmarkActions';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="btn btn-icon" onClick={this.props.toggleBookmark}><span className="glyphicon glyphicon-bookmark active" >Bookmark</span></button>
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
