const Koa = require('koa');
const chalk = require('chalk');

const {
  localIpPort,
  port,
} = require('./util');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa2!</h1>';
});

app.listen(port);
console.log(chalk.bold.blue(`app started at\n Local:\n${localIpPort}`));
