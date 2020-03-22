# nodeCli

使用 egg.js 搭建一套开箱即用的web服务

## 功能点
    1. 数据库读写   √ done
    2. 用户系统
    3. 登录验证
    4. 单点登录
    5. 消息推动（邮件短信等）
   
## QuickStart


### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```


### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


### 数据库变更
    通过migrate
```
    # 升级数据库
    npx sequelize db:migrate
    # 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
    # npx sequelize db:migrate:undo
    # 可以通过 `db:migrate:undo:all` 回退到初始状态
    # npx sequelize db:migrate:undo:all
```