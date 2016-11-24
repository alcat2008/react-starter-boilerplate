
import React from 'react';
// import Table from 'antd/lib/table';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="/">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
/* eslint-disable no-console */
// rowSelection object indicates the need for row selection
const rowSelection = {
  // type: 'checkbox',
  type: 'radio',
  onChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  },
};
/* eslint-enable no-console */

// eslint-disable-next-line react/prefer-stateless-function
class Selection extends React.Component {
  render() {
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}

export default Selection;
