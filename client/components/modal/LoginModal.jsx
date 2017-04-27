import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Login from '../../containers/loginContainer.js';

const LoginModal = () => {
  return (
    <Modal
      trigger={<Button positive>Sign In</Button>}
      size='small'
    >
      <Modal.Content image>
        <Modal.Description>
          <Header>Sign In</Header>
            <Login />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default LoginModal;
