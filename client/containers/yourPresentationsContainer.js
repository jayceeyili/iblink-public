import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectPresentation } from '../actions/presentationActions';
import PresentationList from '../components/overview/presentationList.jsx';
import PresentationTitle from '../components/overview/presentationTitle.jsx';

const YourPresentationsContainer = ({ presentations, selectPresentation }) => (
  <PresentationList title="Your Presentations">
    {presentations.map(presentation =>
      <PresentationTitle
        key={presentation.id}
        title={presentation.title}
        onPresentationTitleClicked={() => selectPresentation(presentation)}
      />
    )}
  </PresentationList>
);

YourPresentationsContainer.propTypes = {
  presentations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slides: PropTypes.array
  })).isRequired,
  selectPresentation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  presentations: state.presentations
});

export default connect(
  mapStateToProps,
  { selectPresentation }
)(YourPresentationsContainer);
