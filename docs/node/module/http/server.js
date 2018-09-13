/**
 * @TODO:
 * 1. 添加高亮, highlight.js
 * 2. 格式化输出, js-beautify, uglify-js
 * 3. 编码乱码
 */

'use strict';

import http from 'http';
import path from 'path';
import fs from 'fs';
import url from 'url';
import chalk from 'chalk';
// import prettier from 'prettier';
import Mime from 'mime-types';
// import mimes from 'mime';

import {
  port,
} from '../util';

import {
  getAllfileHtmls,
  getAllFiles,
  getFileContent,
} from '../fs/readdirSync';

/**
 * @desc:
 * 1. 回调函数接收 request 和 response 对象
 * 2. 获取 HTTP 请求的 method 和 url


const server = http.createServer((req, res) => {
  const {
    method,
    url
  } = req;
  res.writeHead(200, {
    'Content-type': 'text/html'
  });
  res.end('<h1>Hello World</h1>');
  console.log(chalk.blue.bold(`method: ${method} \n url: ${url}`))
});
 */

/**
 * @desc
 * 访问文件目录
 */


const staticPath = 'docs';
const basePath = path.resolve('.', staticPath);
console.log();
const list = getAllFiles([], basePath);
const html = getAllfileHtmls(list, basePath);

// 命令行参数获取 root 目录, 默认是当前目录
const root = path.resolve(process.argv[2] || '.');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    res.end(html);
  }
  const pathname = url.parse(req.url).pathname;
  const filepath = path.join(basePath, pathname);
  let extName = path.extname(pathname);
  extName = extName.replace('.', '')
  const mime = Mime.lookup(extName);
  // const mime = mimes[extName] ? mimes[extName] : 'text/html';
  fs.stat(filepath, (err, stats) => {
    if (!err && stats.isFile()) {
      res.writeHead(200, {
        'Content-Type': mime,
        charset: 'UTF8',
      });
      const content = getFileContent(filepath);
      // const content = fs.createReadStream(filepath);
      // content.setEncoding('UTF8');
      // let data = '';
      // content.on('data', (chunk) => {
      //   data += chunk;
      // })
      // content.on('end', () => {
      //   res.end(data);
      // });
      // content.pipe(res);
      res.end(content);
    } else {
      res.writeHead(404);
      res.end('404 not found');
    }
  })
});
server.listen(port);

console.log(chalk.blue.bold(`server started on port: ${port}`));
