var karmaFactory = require('./factory');

module.exports = function(config) {
  config.set(karmaFactory({
    coverage: true,
    coverageReporters: [
      { type: 'text' },
    ],
  }));
};
