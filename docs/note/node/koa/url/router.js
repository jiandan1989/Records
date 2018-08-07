// 处理 url
import chalk from 'chalk';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import {
  app,
  localIpPort,
  port,
} from '../utils';


// 使用 中间件 解析 POST 请求参数
app.use(bodyParser());

const router = new Router();

// get 请求 localhost:8000/?a=1&b=2
router.get('/', async (ctx, next) => {
  // ctx.request 中获取参数
  const {
    method,
    url,
    querystring,
    query,
  } = ctx.request;

  // ctx 中直接获取参数

  const {
    query: ctxQuery,
    querystring: ctxQueryString,
    params,
  } = ctx;

  // console.log(JSON.stringify(ctx.request));
  const body = {
    method,
    url,
    querystring,
    query,
    ctxQueryString,
    ctxQuery,
    params, // 子集
    response: ctx.response
  }
  ctx.response.body = `
    <div>
      <pre>${JSON.stringify(body, null, 2)}</pre>
      <div style="text-align: center;">
        <a href="/form">Form</a>
      </div>
    </div>`;
  await next();
});

router.get('/form', async (ctx, next) => {
  const html = `
    <div style="width: 500px; margin: 100px auto; box-shadow: 1px 1px 1px #ccc, -1px -1px 1px #ccc; padding: 10px 16px;">
      <h4><a href="/">Home</a></h4>
      <form method="POST" action="/login">
        <p>
          <label>username: </label>
          <input name="username" />
        </p>
        <p>
          <label>password: </label>
          <input name="password" />
        </p>
        <!-- <p>
          <label>Email: </label>
          <input name="email" required type="email" />
        </p> -->
        <button type="submit">submit</button>
      </form>
    </div>
  `;
  ctx.response.body = html;
});


// POST 请求需要使用 koa-body
router.post('/login', async (ctx, next) => {
  const userInfo = ctx.request.body;
  const body = `
    <div>
      <a href="/">Home</a>
      <br>
      <pre>${JSON.stringify(userInfo, null, 2)}</pre>
    </div>`;
  ctx.response.body = body;
});

app.use(router.routes());

// 监听
app.listen(port);
console.log(chalk.bold.blue(`app started at: \n ${localIpPort}`));
