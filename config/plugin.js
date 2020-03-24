'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  io: {
    enable: false,
    package: 'egg-socket.io'
  },
  vue: {
    enable: true,
    package: 'egg-view-vue',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
  }
};
