import React from 'react';
import UploadContainer from '../../containers/uploadContainer.js';
// import LoginModal from '../../containers/loginContainer.js';
import SendStatusButton from '../slide_utilities/toggle_present_button/SendStatusButton.jsx';
import { Button, Menu } from 'semantic-ui-react';
import style from './style.css';


//Login component used for testing purpose. Permanent solution will be through a seperate page
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const container = `${style.nav}`
    const logo = `${style.inline}`
    return (
      // <div className={container}>
      // </div>
      <Menu
        className={container}
        attached
        >
        <Menu.Item>
            <a href='/'>
              <h1 className={logo}>iBlink</h1>
            </a>
        </Menu.Item>

        <Menu.Item>
          <UploadContainer />
        </Menu.Item>

        <Menu.Item>
          <SendStatusButton />
        </Menu.Item>
      </Menu>

    )
  }

}

export default NavBar;
