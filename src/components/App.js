import React from 'react';
import { Link, browserHistory } from 'react-router';

import styles from '../styles/hello.css';

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>

      <div className={styles.content}>
        <div>This starter boilerplate is build with React and Redux.</div>
      </div>
      <div className={styles.footer}>
        <div>Created by FAS</div>
      </div>
    </div>
  );
}
