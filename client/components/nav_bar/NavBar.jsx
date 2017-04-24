import React from 'react';
import LoginViewContainer from '../../containers/loginContainer.js';
import Upload from '../uploader/Upload.jsx';

class NavBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Upload />
        <LoginViewContainer />
      </div>
    )
  }
}

export default NavBar;
