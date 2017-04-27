import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookmarkActionCreators from '../../../actions/bookmarkActions.js';
import BookmarkButton from './BookmarkButton.jsx';

const bundledActionCreators = Object.assign({},
  bookmarkActionCreators
);
const mapStateToProps = state => ({
  bookmarks: state.bookmarks,
  presentationId: state.presentations[0].id,
  userId: state.authentication.userId
});
const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
