import React from 'react';
import PropTypes from 'prop-types';

const PresentationList = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

PresentationList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default PresentationList;
