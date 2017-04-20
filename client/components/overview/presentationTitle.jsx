import React from 'react';
import PropTypes from 'prop-types';

const PresentationTitle = ({ title }) => (
  <div>
    {title}
  </div>
);

PresentationTitle.propTypes = {
  title: PropTypes.string
};

export default PresentationTitle;
