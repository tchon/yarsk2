import React from 'react';

import styles from './style';
import logoURL from './images/react-logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.main}>
        <img className={styles.logo} src={logoURL} height="125" />
        <div className={styles.wrap}>
          <h1 className={styles.title}>YARSK2</h1>
          <h2 className={styles.tagline}>
            <strong>Y</strong>et
            {' '}
            <strong>A</strong>nother
            {' '}
            <strong>R</strong>eact
            {' '}
            <strong>S</strong>tarter
            {' '}
            <strong>K</strong>it
            {' '}
            <strong>2</strong>
          </h2>
        </div>
      </header>
    );
  }
}
