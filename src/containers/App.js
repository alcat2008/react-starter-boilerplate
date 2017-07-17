import React from 'react';
import { connect } from 'react-redux';

import { Header, Footer } from '../components';

import '../styles/global/index.less';
import appStyle from '../styles/views/app.less';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
  render() {
    if (!this.props.global.isInit) return null;

    const { children, ...restProps } = this.props;
    return (
      <div>
        <Header {...restProps} />
        <div className={appStyle.content}>{children}</div>
        <Footer />
      </div>
    );
  }
}


// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({
  routing: state.routing,
  global: state.global,
});

export default connect(mapStateToProps)(App);
