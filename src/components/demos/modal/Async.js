/* eslint-disable no-console */

import React from 'react';
import { Modal, Button } from 'antd';

class Async extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      ModalText: 'Content of the modal dialog',
      visible: false,
    };
  }

  _showModal = () => {
    this.setState({
      visible: true,
    });
  };

  _handleOk = () => {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  _handleCancel = e => {
    console.log('Clicked cancel button', e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this._showModal}>Open a modal dialog</Button>
        <Modal
          title="Title of the modal dialog"
          visible={this.state.visible}
          onOk={this._handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this._handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default Async;
