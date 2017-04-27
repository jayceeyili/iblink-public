import React from 'react';
import PropTypes from 'prop-types';

const PresentationTitle = ({ title, onPresentationTitleClicked }) => (
  <div     
    onClick={onPresentationTitleClicked}
  >
    {title}
  </div>
);

PresentationTitle.propTypes = {
  title: PropTypes.string
};

export default PresentationTitle;
