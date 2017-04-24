import React from 'react';
import Upload from '../uploader/Upload.jsx';
import style from './style.css';

class NavBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    var nav = `${style.nav}`

    return (
      <div className={nav}>
        <Upload />
      </div>
    )
  }
}

export default NavBar;
