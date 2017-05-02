/* eslint-disable */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import { Menu, Icon } from 'antd';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const { isMode, location, ...restProps } = this.props;
    // const navData = {
    //   ['/']: <Link to="/">首页</Link>,
    //   ['/console']: <Link to="/console">控制台</Link>,
    //   ['/developer']: <Link to="/developer">开发者中心</Link>,
    //   ['/materail']: <Link to="/">文档资料</Link>,
    // };
    // const navChildren = Object.keys(navData).map((key, i) => (<MenuItem key={i}>
    //   {navData[key]}
    // </MenuItem>));
    const navChildren = [
      (
        <MenuItem key="/">
          <Link to="/">首页</Link>
        </MenuItem>
      ), (
        <MenuItem key="/console">
          <Link to="/console">控制台</Link>
        </MenuItem>
      ), (
        <MenuItem key="/developer">
          <Link to="/developer">开发者中心</Link>
        </MenuItem>
      ), (
        <MenuItem key="/materail">
          <Link to="/materail">文档资料</Link>
        </MenuItem>
      ),
    ];

    const userTitle = (<div>
      <span className="img">
        <img
          src="https://zos.alipayobjects.com/rmsportal/iXsgowFDTJtGpZM.png"
          width="30"
          height="30"
        />
      </span>
      <span>用户名</span>
    </div>);
    navChildren.push((<MenuItem className="help" key="help">
        <Icon type="question-circle-o" />
        <span>帮助</span>
      </MenuItem>),
      (<SubMenu className="user" title={userTitle} key="user">
        <MenuItem key="a">用户中心</MenuItem>
        <MenuItem key="b">修改密码</MenuItem>
        <MenuItem key="c">登出</MenuItem>
      </SubMenu>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...restProps}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" />
      </TweenOne>
      {isMode ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              // defaultSelectedKeys={['0']}
              selectedKeys={[location.pathname]}
              mode="inline"
              theme="dark"
            >
              {navChildren}
            </Menu>
          </div>
        </div>) :
        <TweenOne
          animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className={`${this.props.className}-nav`}
        >
          <Menu
            mode="horizontal"
            // defaultSelectedKeys={['0']}
            selectedKeys={[location.pathname]}
            id={`${this.props.id}-menu`}
          >
            {navChildren}
          </Menu>
        </TweenOne>
      }
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  isMode: PropTypes.bool,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;
