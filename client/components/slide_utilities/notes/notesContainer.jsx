import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as noteActions from '../../../actions/noteActions';
import * as currentSlideActionCreators from '../../../actions/slideActions';
import Notes from './notes.jsx';

const bundledActionCreators = Object.assign( {},
  currentSlideActionCreators,
  // noteActions,
);
const mapStateToProps = state => ( {
  presentationId: state.presentations[state.selectedPresentationIndex].id,
  userId: state.authentication.userId,
  note: state.currentSlide.note,
  slideId: state.currentSlide.id,
  notes: state.currentSlide.notes,
  currentAudienceSlide: state.bookmarks.currentAudienceSlide
} );
const mapDispatchToProps = dispatch => bindActionCreators( bundledActionCreators, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Notes );
