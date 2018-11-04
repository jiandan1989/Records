---
sidebar: auto
---

::: tip
[同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy): 限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制, 是指两个页面的协议, 端口和域名都相同
:::

## jsonp

> 通过动态创建`script`,使用的是`src` 属性,只能实现 `get`请求
> 有两点缺点

- 加载外部资源,需要考虑安全性, 只能用于自己维护的域或者确认为安全的域, 防止有人恶意的添加不安全的代码
- 捕获错误, html5 中新增加了`onerror`事件,不能准确的捕获错误,如超时,需要使用定时器来控制

<i-divider></i-divider>

### 原生

```js
const script = document.createElement('script');
script.type = 'text/javascript';

// 传参并指定回调执行函数为 onBack
script.src = 'xxx/login?user=admin&callback=onBack';
document.head.appendChild(script);

// 执行回调函数
function onBack(res) {
  alert(JSON.stringify(res));
}
```

### jquery

```js
$.ajax({
  url: 'xxx/login',
  type: 'get',
  dataType: 'jsonp', // 请求方式为 jsonp
  jsonpCallback: 'onBack', // 自定义回调执行函数
  data: {}
});
```

### vue

```js
this.$http
  .jsonp('xxx/login', {
    params: {},
    jsonp: 'onBack'
  })
  .then(res => {
    console.log(res);
  });
```

### 后端

```js
const qs = require('querystring');
const http = require('http');
const server = http.createServer();
server.on('request', function(req, res) {
  const params = qs.parse(req.ur.split('?')[1]);
  const fn = params.callback;

  // jsonp 返回社hi在
  res.writeHead(200, { 'Content-type': 'text/javascript' });
  res.write(fn + '(' + JSON.stringify(params) + ')');
  res.end();
});

server.listen('8080');
```

## CORS

> CORS(Cross-Origin Resource Sharing),通常需要服务端配合设置,若带 `cookie`请求,后端常见设置 `response setHeader('Access-Control-Allow-Origin', 'xxx.com')` , 若有端口,需要填写端口号, 允许那些外源请求 `response.setHeader('Access-Control-Allow-Credentials', "true")` 是否需要验证

<i-divider></i-divider>

- 前端示例

### 原生

```js
var xhr = new XMLHttpRequest(); // IE8/9需要 window.XDomainRequest 兼容
// 前端设置是否带 token
xhr.withCredentials = true;
xhr.open('post', 'xxx.com', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('user=admin');

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    alert(xhr.responenText);
  }
};
```

### jquery

```js
$.ajax({
  ...,
  xhrFields: {
    withCredentials: true, // 是否带 token
  },
  crossDomain: true, // 设置请求头中包含跨域的额外信息, 但不会包含 cookie
});
```

## iframe

> [postMessage(data, origin)](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage): 接收两个参数, 发送的数据, 域名

a.html

```html
<iframe id="iframe" src="xxx.com/b.html"></iframe>
<script>
const iframe = document.getElementById('iframe');
iframe.onload = function () {
  var data = {
    name: 'name',
  };

  // domain2 发送跨域数据
  iframe.contentWindow.postMessage(JSON.stringify(data), 'http://domain2.com');

  // 接收 domain2 返回的数据
  window.addEventListener('message', function(e) {
    console.log('data from domain2', e.data);
  }, false);
}
</script>
```

b.html

```html
<script>
window.addEventListener('message', function(e) {
  console.log('data from domain1', e.data);
  const data = JSON.parse(e.data);

  if (data) {
    data.number = 1;
    window.parent.postMessage(JSON.stringify(data), 'domain1');
  }
})

</script>
```

## 其他跨域

### 图像 ping

### Comet

- 长轮询, 短轮询

### WebSocket
