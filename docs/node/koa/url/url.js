// 处理 url
import chalk from 'chalk';
import {
  app,
  localIpPort,
  port,
  customRouting,
} from '../utils';

app.use(async (ctx, next) => {
  await next();
  const url = ctx.request.url;
  const html = await customRouting(url);
  ctx.body = html;
});

// 监听
app.listen(port);
console.log(chalk.bold.blue(`app started at: \n ${localIpPort}`));
