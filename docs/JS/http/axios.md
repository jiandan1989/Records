---
sidebar: auto
navbar: false
pageClass: custom-page
---

<a><i-button type="primary">@TODO</i-button></a>

::: tip
常用 http 包
:::

## axios

> [官方地址:](https://github.com/axios/axios)

### GET 请求

```js
// 拼接 URL
axios.get(url).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
})

// 参数
axios.get(url, {
  params: {
    id: 1
  }
}).then(function(response) {
  console.log(response);
}).catch(funciton(error) {
  console.log(error);
});

// 使用 async/await

async function getUser() {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}
```

### POST 请求

```js
axios
  .post(url, {
    firstName: 'first'
  })
  .then(function(response) {
    console.log(response);
  })
  .cathc(function(error) {
    console.log(error);
  });
```

### 并发多请求

```js
function getUserAccount() {
  return axios.get(url);
}

function getUserPermissions() {
  return axios.get(url);
}

axios.get([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function(acct, perms) {
    console.log(acct, perms);
  })
);
```

### axios API

> 默认使用 get 方法
> 使用 axios 配置进行请求

```js
// POST 请求
axios({
  method: 'post',
  url: url,
  data: {
    firstName: 'first'
  }
});

// get 请求 获取图片
axios({
  method: 'get',
  url: url,
  responseType: 'stream'
}).then(function(response) {
  response.data.pipe(fs.createWriteSteam('ada_lovelace.jpg'));
});
```

### 请求别名

> 为方便起见，为所有支持的请求方法提供了别名

- axios.request(config)
- axios.get(url, config): 获取资源
- axios.delete(url, config): 删除文件
- axios.head(url, config): 同 get 相同, 只是不会返回主体, 值返回 header 信息
- axios.options(url, config): 返回 url 支持的方法
- axios.post(url, { data, config}): post 请求
- axios.put(url, data, config): 向服务器存放文件
- axios.patch(url, data, config):

### NOTE

> 在使用别名方法时, url, method, data 这些属性都不必在配置中指定

### 并发

> 处理并发请求的助手函数

- axios.all(iterable)
- axios.spead(callback)

### 创建实例

> 可以使用自定义配置新建一个 `axios` 实例

```js
const instance = axios.create({
  baseURL: url,
  timeout: 1000, // 设置超时时间
  headers: {
    'X-Custom-Header': 'foobar'
  }
});
```

### 请求配置

> 创建请求时可以用的配置选项, 只有 `url` 是必需的, 如果没有指定 `method`, 请求将默认使用 `get` 方法

```js
{
  // url 是用于请求的服务器 URL
  url: 'url',

  // method: 创建请求时使用的方法
  method: 'get', // 默认是 get

  // baseURL: 将自动添加在 url 前面, 除非 URL 适应额绝对的 URL地址, 它可以通过设置一个 baseURL, 便于为 axios 实例的方法传递相对URL
  baseURL: 'baseURL', // 常用于 mock, 开发环境和线上环境切换

  // transformRequest: 允许在向服务器发送前,修改请求数据, 只能用在 PUT, POST 和 PATCH 这几个请求方法
  transformRequest: [function(data) {
    // 对 data 做修改
    return data;
  }],

  // transformResponse: 在传递给 then / catch 前, 允许修改响应数据
  transformResponse: [function(data) {
  // 处理 data
    return data;
  }],

  // headers: 即将被发送的自定义请求头
  headers: {  },

  // params: 即将与请求一起发送的 URL参数, 必须是一个无格式对象(plain object) 或 URLSearchParams 对象
  params: {
    id: 12345
  },

  // paramsSerializer 是负责将 params 序列化的函数
  paramsSerializer: function(params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' })
  },

  // data: 作为请求主题被发送的数据
  // 只适用于 PUT, POST, PATCH
  // 在没有设置 transformRequest时, 必须是以下类型之一
  //  string, plain object, ArrayBuffer, ArrayBufferview, URLSearchParams
  // 浏览器专属: FormData, File, Blob
  // Node 专属, Stream
  data: {
    firstName: 'first'
  },

  // timeout: 指定IQ能求超时的毫秒数(0 表示无超时时间), 如果请求超出了设置 timeout 的时间, 请求将被打断
  timeout: 1000,

  // withCredentials: 表示苦撑与请求时 是否需要使用凭证
  withCredentials: false, // 默认不需要

  // adapter: 允许自定义处理请求, 以便于测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (response doc)(#response-api)
  adapter: function(config) {
   //
  },

  // auth: 表示应用 HTTP 基础验证, 并提供平局
  // 设置一个 Authorization 头, 覆写掉现有的任意使用 headers 设置的自定义 Authorization 头
  auth: {
    username: ''
  },

  // responseType: 表示服务器响应的数据类型,可以是 arraybuffer, blob, document, json, text, stream
  responseType: 'json', 默认

  // xsrfCookieName: 用作 xsrc token 的值的 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // xsrfHeaderName: 承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认

  // onUploadProgress: 允许上传处理进度事件
  onUploadPorgress: function(progressEvent) {
    // 原生进度事件处理
  },

  // onDownLoadProgress: 允许为下载处理进度事件
  onDownLoadProgress: function(progressEvent) {
    // 处理原生进度事件
  },

  // maxContentLength: 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // validateStatus: 定义对于给定的 HTTP 响应状态码是 resolve 或 reject promise, 如果 validateStatus 返回 true(或者设置为 null 或 undefined), promise 将被 resolve 否则, promise 将被rejecte
  validateStatus: function(status) {
    return status >= 200 && status < 300; // 默认
  },

  // maxRedirects: 定义在 node.js 中 follow 的最大重定向数目, 如果设置为 0 , 将不会 follow 任务重定向
  maxRedirects: 5, // 默认

  // httpAgent 和 httpsAgent 分别在 node.js 中定义在执行 http 和 https 时使用的自定义代理, 允许想这样配置选项
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // proxy: 定义代理服务器的 主机名和端口号
  //  auth 表示 HTTP 基础验证应当用于连接代理, 并提供凭据
  //  这将设置一个 Proxy-Authorization 头, 覆写掉已有的通过使用 header 设置的自定义 Proxy-Authorization 头
  proxy: {
    host: '',
    port: port,
    auth: {
      username: 'username'
    },
  },

  // cancelToken 指定用于取消请求的 cancel token
  cancelToken: new CancelToken(function(cancel) {

  })

}
```

### 响应结构

> 请求的响应包含以下信息

```js
{
  // 服务器提供的响应
  data: {},

  // 状态码
  status: 200,

  // statusText: HTTP状态信息
  statusText: 'OK',
  
  // headers: 服务器响应的头
  headers: {},

  // config: 为请求提供的配置信息
  config: {}
}

```

### 自定义拦截

> 获取返回的 token 信息,添加到前端缓存中
> 统一为 headers 添加 token 信息
> 统一处理错误信息
> 根据返回信息中的 code ,做判断处理, 示例中使用的 code: 600 即为处理成功

```js

import axios from 'axios';
import { Message } from 'element-ui';

import { getToken, setToken } from '@/util';

const msgDuration = 10 * 1000; // message 提示消失时间
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = msgDuration; // 默认 5s 超时

const axiosService = axios.create();

// 设置 request
axiosService.interceptors.request.use(function (config) {
  config.headers.dt = Date.now();
  const token = getToken('ttt');
  if (token) {
    config.headers = Object.assign(config.headers, { token });
  }
  config.validateStatus = function (status) {
    return status >= 200 && status < 300;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 统一设置请求返回值
axiosService.interceptors.response.use((response) => {
  if (response.status === 401) {
    clearLocal();
    return Promise.reject(new Error('请重新登录'));
  }
  if (response.status !== 200) {
    showErrorMsg('未知错误，请重试');
    return Promise.reject(new Error('未知错误，请重试'));
  }
  if (!response.data.success) {
    showErrorMsg('请求失败');
    return Promise.reject(new Error('请求失败'));
  }
  const { data } = response;
  if (data.code !== 600) {
    const errorMsg = data.msg || '请求失败!';
    showErrorMsg(errorMsg);
    return Promise.reject(new Error(errorMsg));
  }
  if (data.data && data.data.token) {
    setToken(data.data.token);
  }
  return data.data;
}, (error) => {
  if (error.response && error.response.status === 401) {
    showErrorMsg('未登录, 请重新登录!');
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
    return Promise.error(error.response);
  }
  showErrorMsg('未知错误，请重试');
  return Promise.reject(error);
});

export const showErrorMsg = message => Message({
  type: 'error',
  message,
  duration: msgDuration
});
export const request = axiosService;


```

<i-back-top></i-back-top>
