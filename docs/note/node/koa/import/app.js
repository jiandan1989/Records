import Koa from '/koa';
import chalk from 'chalk';

import {
  localIpPort,
  port
} from '../utils';

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  ctx.response.body = 'Hello Koa!';
});

app.listen(port);
console.log(chalk.bold.blue(`app started at: \n ${localIpPort}`));
