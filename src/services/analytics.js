/* eslint-disable no-console */

import debug from 'debug';

const log = debug('react-starter:analytics');

const analytics = {
  track(pathname) {
    log('## track ## ', pathname);
  }
};

export default analytics;
