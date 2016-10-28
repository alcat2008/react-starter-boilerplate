/* eslint-disable no-console */

import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  },
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const pagination = {
  total: data.length,
  showSizeChanger: true,
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    console.log('Current: ', current);
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class Paging extends React.Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} pagination={pagination} />
    );
  }
}

export default Paging;
