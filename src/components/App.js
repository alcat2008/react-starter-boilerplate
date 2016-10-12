import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import classNames from 'classnames';
import styles from '../styles/views/hello.less';
import '../styles/core/common.less';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    let welcomeStyle = styles.content;
    if (this.props.routing.locationBeforeTransitions.pathname === '/') welcomeStyle = styles.contentLegend;

    return (
      <div>
        <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/page1">Page 1</Link>
          {' '}
          <Link to="/page2">Page 2</Link>
        </header>
        <div>
          <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
        </div>
        <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>

        <div className={classNames(welcomeStyle)}>
          <div>This starter boilerplate is build with React and Redux.</div>
        </div>
        <div className="global-footer">
          <div>global-footer</div>
        </div>
        <div className={styles.footer}>
          <div>Created by FAS</div>
        </div>
      </div>
    );
  }
}


// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({
  routing: state.routing,
});

export default connect(mapStateToProps)(App);
