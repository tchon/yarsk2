var karmaFactory = require('./factory');

module.exports = function(config) {
  config.set(karmaFactory({
    notify: true,
  }));
};
