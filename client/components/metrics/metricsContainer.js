import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Metrics from './Metrics.jsx';


// const bundledActionCreators = Object.assign( {}, noteActions );
const mapStateToProps = state => ({
  currentSlide: state.bookmarks.currentAudienceSlide,
  presentationId: state.presentations[state.selectedPresentationIndex].id
});
// const mapDispatchToProps = dispatch => bindActionCreators(bundledActionCreators, dispatch);

export default connect(mapStateToProps, /*mapDispatchToProps*/)(Metrics);
