/* eslint-disable no-console */

import React from 'react';
import { autobind } from 'core-decorators';
import { Select } from 'antd';

import data from './data';

const Option = Select.Option;
const DISPLAY_TEXT = '-- 请选择 --';

export default class District extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    // initial state
    this.state = {
      provinceIndex: 0,
      municipalityIndex: 0,
      districtIndex: 0,
      provinceValue: '',
      municipalityValue: '',
      districtValue: '',
      municipalityList: [],
      districtList: [],
    };
  }

  @autobind
  _handleProvinceChange(value) {
    this.setState({
      provinceIndex: value,
      provinceValue: data[value].label,
      municipalityValue: '',
      municipalityList: data[value].children,
      districtValue: '',
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.provinceValue, this.state.municipalityValue, this.state.districtValue);
      }
    });
  }

  @autobind
  _handleMunicipalityChange(value) {
    const municipality = data[this.state.provinceIndex].children[value];
    this.setState({
      municipalityIndex: value,
      municipalityValue: municipality.label,
      districtValue: '',
      districtList: municipality.children,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.provinceValue, this.state.municipalityValue, this.state.districtValue);
      }
    });
  }

  @autobind
  _handleDistrictChange(value) {
    const district = data[this.state.provinceIndex].children[this.state.municipalityIndex].children[value];
    this.setState({
      districtIndex: value,
      districtValue: district.label,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.provinceValue, this.state.municipalityValue, this.state.districtValue);
      }
    });
  }

  render() {
    // const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
    const provinceOptions = data.map((province, index) => <Option key={index}>{province.label}</Option>);
    const municipalityOptions = this.state.municipalityList.map(
      (municipality, index) => <Option key={index}>{municipality.label}</Option>
    );
    const districtOptions = this.state.districtList.map(
      (district, index) => <Option key={index}>{district.label}</Option>
    );
    return (
      <div>
        <Select
          value={this.state.provinceValue || DISPLAY_TEXT}
          style={{ width: 190 }}
          onSelect={this._handleProvinceChange}
        >
          {provinceOptions}
        </Select>
        <Select
          value={this.state.municipalityValue || DISPLAY_TEXT}
          style={{ width: 190 }}
          onSelect={this._handleMunicipalityChange}
        >
          {municipalityOptions}
        </Select>
        <Select
          value={this.state.districtValue || DISPLAY_TEXT}
          style={{ width: 190 }}
          onSelect={this._handleDistrictChange}
        >
          {districtOptions}
        </Select>
      </div>
    );
  }
}
