/* eslint-disable no-console */

import React from 'react';
import { Modal, Button } from 'antd';

const confirm = Modal.confirm;

class Confirm extends React.Component {
  _showConfirm = () => {
    confirm({
      title: 'Want to delete these items?',
      content: 'some descriptions',
      onOk() {
        console.log('OK');
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

export default Confirm;
