/* eslint-disable no-console */

import React from 'react';
import { Modal, Button } from 'antd';

export default class BasicDemo extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = { visible: false };
  }

  _showModal = () => {
    this.setState({
      visible: true,
    });
  };

  _handleOk = () => {
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  };

  _handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this._showModal}>Open a modal dialog</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this._handleOk}
          onCancel={this._handleCancel}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}
