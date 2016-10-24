/* eslint-disable no-console */

import React from 'react';
import { Modal, Button } from 'antd';

class Manual extends React.Component {
  _success = () => {
    const modal = Modal.success({
      title: 'This is a notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  };

  render() {
    return (
      <Button onClick={this._success}>Success</Button>
    );
  }
}

export default Manual;
