import React from 'react';
import { Link } from 'react-router';
import { Menu, Row, Col } from 'antd';

const MenuItem = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      menuMode: 'horizontal',
      // menuMode: 'inline',
    };
  }

  render() {
    const activeMenuItem = this.props.location.pathname || '/';

    const menuMode = this.state.menuMode;
    const menu = [
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <MenuItem key="/">
          <Link to="/">首页</Link>
        </MenuItem>
        <MenuItem key="/foo">
          <Link to="/foo">Foo</Link>
        </MenuItem>
        <MenuItem key="/page1">
          <Link to="/page1">Page 1</Link>
        </MenuItem>
        <MenuItem key="/page2">
          <Link to="/page2">Page 2</Link>
        </MenuItem>
        <MenuItem key="/demo">
          <Link to="/demo">Demo</Link>
        </MenuItem>
      </Menu>,
    ];

    return (
      <header id="header">
        <Row>
          <Col lg={4} md={6} sm={7} xs={24}>
            <Link to="/" id="logo">
              <span>React Starter</span>
            </Link>
          </Col>
          <Col lg={20} md={18} sm={17} xs={0} style={{ display: 'block' }}>
            {menu}
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
