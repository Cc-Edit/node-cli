'use strict';

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('users', { id: 11 });
  }

}

module.exports = UserService;
