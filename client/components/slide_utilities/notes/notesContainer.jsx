import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as noteActions from '../../../actions/noteActions';
import Notes from './notes.jsx';

const bundledActionCreators = Object.assign( {}, noteActions );
const mapStateToProps = state => ( {
  presentationId: state.presentations[0].id,
  userId: state.authentication.userId,
  text: state.notes.text,
  currentAudienceSlide: state.bookmarks.currentAudienceSlide
} );
const mapDispatchToProps = dispatch => bindActionCreators( bundledActionCreators, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Notes );
