import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Item: BreadcrumbItem } = Breadcrumb;
const { SubMenu, Item: MenuItem } = Menu;
const { Content, Sider } = Layout;

function createLinkMenu(key, value) {
  return (
    <MenuItem key={key}>
      <Link to={key}>{value}</Link>
    </MenuItem>
  );
}

class Developer extends React.Component {
  render() {
    const { location } = this.props;
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
              selectedKeys={[location.pathname]}
              defaultOpenKeys={[location.pathname.split('/')[2]]}
              style={{ height: '100%' }}
            >
              <SubMenu key="resources" title={<span><Icon type="laptop" />资源管理</span>}>
                {createLinkMenu('/developer/resources/server', '云服务器')}
                {createLinkMenu('/developer/resources/mirror', '镜像仓库')}
                {createLinkMenu('/developer/resources/dbs', 'DB Schema')}
                {createLinkMenu('/developer/resources/repos', '代码托管')}
                {createLinkMenu('/developer/resources/domain', '域名配置')}
              </SubMenu>
              <SubMenu key="application" title={<span><Icon type="appstore-o" />应用管理</span>}>
                {createLinkMenu('/developer/application/basic', '基础配置')}
                {createLinkMenu('/developer/application/services', '服务管理')}
                {createLinkMenu('/developer/application/flows', '流程管理')}
              </SubMenu>
              <SubMenu key="devops" title={<span><Icon type="solution" />DevOps</span>}>
                {createLinkMenu('/developer/devops/build', '编译构建')}
                {createLinkMenu('/developer/devops/sandbox', '沙箱测试')}
                {createLinkMenu('/developer/devops/deploy', '部署服务')}
              </SubMenu>
              <SubMenu key="monitor" title={<span><Icon type="notification" />监控中心</span>}>
                {createLinkMenu('/developer/monitor/logs', '日志服务')}
                {createLinkMenu('/developer/monitor/dbquery', '数据库服务')}
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
