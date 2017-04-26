import React from 'react';
import Upload from '../uploader/Upload.jsx';
import LoginModal from '../modal/LoginModal.jsx';
import style from './style.css';


//Login component used for testing purpose. Permanent solution will be through a seperate page
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const container = `${style.nav}`
    return (
      <div className={container}>
        <LoginModal />
        <Upload />
      </div>
    )
  }

}

export default NavBar;
