import os from 'os';
import Koa from 'koa';


export const app = new Koa();

// 本机 Ip
export const Ip = os.networkInterfaces().en0.find(item => item.family === 'IPv4').address;

// 监听端口
export const port = 8000;

// 访问地址
export const localIpPort = `http://${Ip}:${port}`;

// 原生路由
export const customRouting = async (url) => {
  let html = '<h1>404</h1>';
  switch (url) {
    case '/':
      html = '<h1>Home Page</h1>';
      break;
    case '/about':
      html = '<h1>About Page</h1>';
      break;
    default:
      break;
  }
  return html;
}
