import React, { PropTypes } from 'react';

const PresentationTitle = ({ onClick, title }) => (
  <li
    onClick={onClick}
  >
    {title}
  </li>
);

PresentationTitle.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default PresentationTitle;
