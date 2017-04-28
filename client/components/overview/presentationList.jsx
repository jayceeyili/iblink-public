import React from 'react';
import LoginModal from '../../containers/loginContainer.js';
import PropTypes from 'prop-types';

const paddingTop = {
  'text-decoration': 'underline'
}

const signIn = {
  margin: '10 auto',
}

const PresentationList = ({ children }) => (
  <div>
    <div style={signIn}>
      <LoginModal />
    </div>
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
