import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {};
  }

  render() {
    const activeMenuItem = this.props.location.pathname || '/';

    const menu = [
      <div id="nav" key="nav">
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/page1">Page 1</Link>
        {' '}
        <Link to="/page2">Page 2</Link>
      </div>,
    ];

    return (
      <header id="header">
        {menu}
      </header>
    );
  }
}

export default Header;
