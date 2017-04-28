import React from 'react';
import PropTypes from 'prop-types';

const paddingTop = {
  'padding-top': '40px',
  'text-decoration': 'underline'
}

const PresentationList = ({ children }) => (
  <div>
    <h2 style={paddingTop}>Presentations</h2>
    <div>
      <div>{children}</div>
    </div>
  </div>
);

PresentationList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default PresentationList;
