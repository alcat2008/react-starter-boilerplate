/* eslint-disable no-console */

import React from 'react';
import { autobind } from 'core-decorators';
import District from './District';

class DistrictDemo extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      province: '',
      municipality: '',
      district: '',
    };
  }

  @autobind
  _onChange(province, municipality, district) {
    this.setState({ province, municipality, district });
  }

  render() {
    return (
      <div>
        <District onChange={this._onChange} />
        <div>{'省： ' + this.state.province}</div>
        <div>{'市： ' + this.state.municipality}</div>
        <div>{'区： ' + this.state.district}</div>
      </div>
    );
  }
}

export default DistrictDemo;
