/* eslint-disable no-console */

import React from 'react';
import { autobind } from 'core-decorators';
import Qs from 'qs';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}];

class Ajax extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      data: [],
      pagination: {},
      loading: false,
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  @autobind
  _fetchData(params = {}) {
    console.log('params:', params);
    this.setState({ loading: true });
    fetch('https://randomuser.me/api?' + Qs.stringify({
      results: 10,
      ...params,
    }))
      .then(response => response.json())
      .then(data => {
        const pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.setState({
          loading: false,
          data: data.results,
          pagination,
        });
      });
  }

  @autobind
  handleTableChange(pagination, filters, sorter) {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this._fetchData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  render() {
    return (
      <Table
        columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default Ajax;

