
import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;


// eslint-disable-next-line react/prefer-stateless-function
class DemoWrapper extends React.Component {

  constructor(props) {
    super(props);
    // initial state
    this.state = {
      current: '1',
      openKeys: [],
    };
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
    this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
  };

  getKeyPath = key => {
    const map = {
      list: ['list'],
      modal: ['modal'],
      sub3: ['sub2', 'sub3'],
      sub4: ['sub4'],
    };
    return map[key] || [];
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  // eslint-disable-next-line arrow-body-style
  _renderNav = () => {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{ width: 240 }}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
      >
        <SubMenu key="list" title={<span><Icon type="bars" /><span>List</span></span>}>
          <MenuItem key="basic">
            <Link to="/demo/list/basic">基本用法</Link>
          </MenuItem>
          <MenuItem key="selection">
            <Link to="/demo/list/selection">可选择</Link>
          </MenuItem>
          <MenuItem key="selection-operation">
            <Link to="/demo/list/selection-operation">选择和操作</Link>
          </MenuItem>
          <MenuItem key="selection-props">
            <Link to="/demo/list/selection-props">选择框属性</Link>
          </MenuItem>
          <MenuItem key="paging">
            <Link to="/demo/list/paging">分页</Link>
          </MenuItem>
          <MenuItem key="reset-filter">
            <Link to="/demo/list/reset-filter">可控的筛选和排序</Link>
          </MenuItem>
          <MenuItem key="head">
            <Link to="/demo/list/head">筛选和排序</Link>
          </MenuItem>
          <MenuItem key="ajax">
            <Link to="/demo/list/ajax">远程加载数据</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu key="modal" title={<span><Icon type="bars" /><span>Modal</span></span>}>
          <MenuItem key="basic">
            <Link to="/demo/modal/basic">基本</Link>
          </MenuItem>
          <MenuItem key="async">
            <Link to="/demo/modal/async">异步关闭</Link>
          </MenuItem>
          <MenuItem key="confirm">
            <Link to="/demo/modal/confirm">确认对话框</Link>
          </MenuItem>
          <MenuItem key="confirm-promise">
            <Link to="/demo/modal/confirm-promise">确认对话框（异步）</Link>
          </MenuItem>
          <MenuItem key="info">
            <Link to="/demo/modal/info">信息提示</Link>
          </MenuItem>
          <MenuItem key="manual">
            <Link to="/demo/modal/manual">手动移除</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>Tree</span></span>}>
          <MenuItem key="2">
            <Link to="/demo/tree">Tree</Link>
          </MenuItem>
          <MenuItem key="5">Option 5</MenuItem>
          <MenuItem key="6">Option 6</MenuItem>
          <SubMenu key="sub3" title="Submenu">
            <MenuItem key="7">Option 7</MenuItem>
            <MenuItem key="8">Option 8</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <MenuItem key="9">Option 9</MenuItem>
          <MenuItem key="10">Option 10</MenuItem>
          <MenuItem key="11">Option 11</MenuItem>
          <MenuItem key="12">Option 12</MenuItem>
        </SubMenu>
      </Menu>
    );
  };

  render() {
    return (
      <Row>
        <Col sm={7} xs={24}>
          {this._renderNav()}
        </Col>
        <Col sm={17} xs={0} style={{ display: 'block' }}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default DemoWrapper;
