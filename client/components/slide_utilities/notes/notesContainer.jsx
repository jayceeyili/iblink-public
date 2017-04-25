import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as noteActions from '../../../actions/noteActions';
import * as currentSlideActionCreators from '../../../actions/slideActions';
import Notes from './notes.jsx';

const bundledActionCreators = Object.assign( {},
  currentSlideActionCreators,
  noteActions,
);
const mapStateToProps = state => ( {
  presentationId: state.presentations[0].id,
  userId: state.authentication.userId,
  note: state.currentSlide.note,
  slideId: state.currentSlide.id
} );
const mapDispatchToProps = dispatch => bindActionCreators( bundledActionCreators, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Notes );
