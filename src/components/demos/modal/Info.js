/* eslint-disable no-console */

import React from 'react';
import { Modal, Button } from 'antd';

class Info extends React.Component {
  _info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  _success = () => {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  };

  _error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };

  _warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this._info}>Info</Button>
        <Button onClick={this._success}>Success</Button>
        <Button onClick={this._error}>Error</Button>
        <Button onClick={this._warning}>Warning</Button>
      </div>
    );
  }
}

export default Info;
