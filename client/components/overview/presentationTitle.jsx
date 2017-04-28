import React from 'react';
import style from './style.css';
import PropTypes from 'prop-types';


const titles = `${style.title}`
const container = `${style.container}`

const PresentationTitle = ({ title, onPresentationTitleClicked, current }) => (
  <div
    style={{
      'textDecoration': current ? 'underline' : 'none'
    }}
    onClick={onPresentationTitleClicked}
    className={titles}
  >
    {title}
  </div>
);

PresentationTitle.propTypes = {
  title: PropTypes.string
};

export default PresentationTitle;
