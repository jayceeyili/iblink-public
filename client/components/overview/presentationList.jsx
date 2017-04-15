import React, { PropTypes } from 'react';
import PresentationTitle from './presentationTitle.jsx';

const PresentationList = ({ presentations, onPresentationClick }) => (
  <ul>
    {presentations.map(presentation =>
      <PresentationTitle
        key={presentation.id}
        {...presentation}
        onClick={() => onPresentationClick(presentation.id)}
      />
    )}
  </ul>
);

PresentationList.propTypes = {
  presentations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onPresentationClick: PropTypes.func.isRequired
};

export default PresentationList;
