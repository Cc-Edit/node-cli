/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579339783137_4918';

  // add your middleware config here
  config.middleware = [];

  // squelize confid
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'nodeCli'
  };

  // squelize confid
  config.vue = {
    // renderOptions config, please @see https://ssr.vuejs.org/en/api.html#renderer-options
    renderOptions: {
      // template: '<!DOCTYPE html><html lang="en"><body><!--vue-ssr-outlet--></body></html>',

      // webpack vue ssr plugin build manifest file
      // clientManifest: require(path.join(app.baseDir,'public/vue-ssr-client-manifest.json')),
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
