import React from 'react';
import { connect } from 'react-redux';
import enquire from 'enquire.js';

// import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

import '../styles/index.less';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const { children, location } = this.props;
    // if (location && location.pathname === '/home') {
    //   return children;
    // }

    const childElement = [
      <Nav isMode={this.state.isMode} location={location} />,
      React.cloneElement(children, {
        // profile,
        // subdomains,
        // ...routeActions,
        // isMode: this.state.isMode,
      }),
      <Footer isMode={this.state.isMode} />,
    ];

    return (
      <div className="templates-wrapper">
        {childElement}
      </div>
    );
  }
}


// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({
  routing: state.routing,
});

export default connect(mapStateToProps)(App);
