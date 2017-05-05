import React from 'react';
import { connect } from 'react-redux';

import Header from './layout/Header';
import Footer from './layout/Footer';

import '../styles/global/index.less';
import appStyle from '../styles/views/app.less';


// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
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
});

export default connect(mapStateToProps)(App);
