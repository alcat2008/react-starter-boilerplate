/* eslint-disable no-console */

import React from 'react';
import { Modal, Button } from 'antd';

const confirm = Modal.confirm;

class ConfirmPromise extends React.Component {
  _showConfirm = () => {
    confirm({
      title: 'Want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this._showConfirm}>
          confirmation modal dialog
        </Button>
      </div>
    );
  }
}

export default ConfirmPromise;
