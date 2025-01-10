'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    liveReload: {
      host: 'localhost',
      port: 49152,
    },
  });

  app.import('node_modules/jquery/dist/jquery.min.js');
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
  app.import('public/assets/bundle.js');

  return app.toTree();
};
