import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Item: BreadcrumbItem } = Breadcrumb;
const { SubMenu, Item: MenuItem } = Menu;
const { Content, Sider } = Layout;

class Developer extends React.Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <BreadcrumbItem>主页</BreadcrumbItem>
          <BreadcrumbItem>开发者中心</BreadcrumbItem>
          <BreadcrumbItem>服务列表</BreadcrumbItem>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['services']}
              defaultOpenKeys={['application']}
              style={{ height: '100%' }}
            >
              <SubMenu key="resources" title={<span><Icon type="laptop" />资源管理</span>}>
                <MenuItem key="1">option1</MenuItem>
                <MenuItem key="2">option2</MenuItem>
                <MenuItem key="3">option3</MenuItem>
                <MenuItem key="4">option4</MenuItem>
              </SubMenu>
              <SubMenu key="application" title={<span><Icon type="appstore-o" />应用管理</span>}>
                <MenuItem key="services">
                  <Link to="/developer/application/services">服务列表</Link>
                </MenuItem>
              </SubMenu>
              <SubMenu key="DevOps" title={<span><Icon type="solution" />DevOps</span>}>
                <MenuItem key="9">option9</MenuItem>
                <MenuItem key="10">option10</MenuItem>
              </SubMenu>
              <SubMenu key="Monitor" title={<span><Icon type="notification" />监控中心</span>}>
                <MenuItem key="11">option11</MenuItem>
                <MenuItem key="12">option12</MenuItem>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280, flex: '1' }}>
            {this.props.children}
          </Content>
        </Layout>
      </Content>
    );
  }
}

export default Developer;
