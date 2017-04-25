import React from 'react';
import UploadContainer from '../../containers/uploadContainer';
import style from './style.css';
import Login from '../../containers/loginContainer.js';

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    const nav = `${style.nav}`;

    return (
      <div className={nav}>
        <Login />
        <UploadContainer />
      </div>
    );
  }
}

export default NavBar;
