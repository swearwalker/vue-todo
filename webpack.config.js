const path = require('path');

module.exports = {
  resolve: {
    // for WebStorm
    alias: {
      '@': path.resolve(__dirname + '/src'),
      // '~': path.resolve(__dirname)
    },
  },
};
