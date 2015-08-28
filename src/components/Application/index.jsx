import React from 'react';

import Header from '../Header';
import styles from './style';

export default class Application extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.wrap}>
          <Header />

          <main className={styles.body}>
            <p>Here's my {' '}
              <a href="https://github.com/tchon/yarsk2">version</a>
              {' '} of {' '}
              <a href="https://github.com/bradleyboy/yarsk">YARSK</a>.
            </p>
          </main>
        </div>
      </div>
    );
  }
}
