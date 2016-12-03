/* eslint-disable no-console */

import React from 'react';
import Steps from './Wrapper';
// import { Steps } from 'antd';

const Step = Steps.Step;

class StepsDemo extends React.Component {
  render() {
    return (
      <Steps current={1} labelPlacement="vertical">
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    );
  }
}

export default StepsDemo;
