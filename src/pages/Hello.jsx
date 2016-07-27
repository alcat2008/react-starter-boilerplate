import React from 'react';
import styles from '../styles/hello.css';

export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.content}>
          <h1>Hi, buddy!</h1>
          <div>This starter boilerplate is build for React.</div>
        </div>
        <div className={styles.footer}>
          <div>Created by FAS</div>
        </div>
      </div>
    );
  }
}
