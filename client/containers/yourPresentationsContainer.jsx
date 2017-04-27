import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectPresentationIndex } from '../actions/selectedPresentationActions';
import PresentationList from '../components/overview/presentationList.jsx';
import PresentationTitle from '../components/overview/presentationTitle.jsx';

const YourPresentationsContainer = ({ presentations, selectPresentationIndex }) => (
  <PresentationList title="Presentations">
    {presentations.map((presentation, index) =>
      <PresentationTitle
        key={presentation.id}
        title={presentation.title}
        onPresentationTitleClicked={() => selectPresentationIndex(index)}
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
  selectPresentationIndex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  presentations: state.presentations
});

export default connect(
  mapStateToProps,
  { selectPresentationIndex }
)(YourPresentationsContainer);
