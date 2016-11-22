module.exports = {
  path: 'async',
  getComponents(nextState, callback) {
    require.ensure([], require => {
      callback(null, require('./Async'));
    });
  }
};
