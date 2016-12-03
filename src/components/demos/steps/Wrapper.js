/* eslint-disable react/no-unused-prop-types */

import React, { PropTypes } from 'react';
import Steps from './Steps';
import Step from './Step';

export default class Wrapper extends React.Component {
  static Step = Step;

  static defaultProps = {
    prefixCls: 'cc-steps',
    iconPrefix: 'ant',
    current: 0,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    current: PropTypes.number,

    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),
    size: PropTypes.oneOf(['default', 'small']),
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
  };

  render() {
    return (
      <Steps {...this.props} />
    );
  }
}
