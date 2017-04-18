import React, { PropTypes } from 'react';

const PresentationTitle = ({ title }) => (
  <div>
    {title}
  </div>
);

PresentationTitle.propTypes = {
  title: PropTypes.string
};

export default PresentationTitle;
