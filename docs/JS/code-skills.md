---
sidebar: auto
---

::: tip
本文主要来自于 微信公众号: [前端大全](微信号: FrontDev)

- [地址1](https://segmentfault.com/a/1190000011557368)
- [地址2](https://www.zhihu.com/question/46943112)
- [地址3](https://github.com/jawil/blog/issues/24)
:::

## 常用代码

### 浮点数取整

```js
const x = 123.4545;

x >> 0; // 123
~~x; // 123
x | 0; // 123
Math.floor(x); // 123
```

::: tip
注意: 前三种方法只适用于 32 位整数, 对于负数的处理上和 `Math.floor` 是不同的

```js
Math.floor(-12.53); // -13
-12.53 | 0; // -12
```

:::

### 随机生成 6 位数字验证码

```js
// 方法一
export const randomVerificationCodeOne = () =>
  ('000000' + Math.floor(Math.random() * 999999)).slice(-6);

// 方法二
export const randomVerificationCodeTwo = () =>
  Math.random()
    .toString()
    .slice(-6);

// 方法三
export const randomVerificationCodeThree = () =>
  Math.random.toFixed(6).slice(-6);

// 方法四
export const randomVerificationCodeFour = () =>
  '' + Math.floor(Math.random() * 999999);
```

### 16 进制颜色代码生成

```js
export const randomColorSixteen = () =>
  '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
```

### 使用 void 0 解决 undefined 被污染

```js
undefined = 1;
!!undefined; // true
!!void 0; // false
```

### 单行写一个评级组件

```js
'★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
```

### 正确处理错误方式

```js
try {
  something;
} catch (e) {
  window.location.href = 'http://stackoverflow.com/search?q=[js]+' + e.message;
}
```

### 字符串转数字

```js
var a = '1';
+a; // 1
```

### arguments 对象转换成数组

```js
Array.prototype.slice.call(arguments);

// ES6
Array.from(arguments);
[...arguments]
// 现使用 ...rest 代替arguments
```

### 获取日期时间戳

```js
// 指定时间的时间戳
new Date().getTime()
(new Date()).getTime();
(new Date).getTime()

// 获取当前的时间戳

Date.now();
// 日期显示转化为数字
+new Date();

```

---

## 常用小工具

### 驼峰命名转下划线

```js
export const humpToUnderline = str =>
  str
    .match(/^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g)
    .join('_')
    .toLowerCase();
```

### 最短代码实现数组去重

```js
[...new Set(arr)]
```
### 实现长度 m 且值都为 n 的数组

```js
Array(m).fill(n)
```

### URL 查询参数转 JSON 格式


```js
// ES6

export const queryByES6 = (search = '') =>
  ((querystring = '') =>
    (q => (
      querystring
        .split('&')
        .forEach(item => (kv => kv[0] && (q[kv[0]] = kv[1]))(item.split('='))),
      q
    ))({}))(search.split('?')[1]);

// ES5
export const queryByES5One = search => {
  if (search === void 0) {
    search = '';
  }
  return (function(querystring) {
    if (querystring === void 0) {
      querystring = '';
    }
    return (function(q) {
      return (
        querystring.split('&').forEach(function(item) {
          return (function(kv) {
            return kv[0] && (q[kv[0]] = kv[1]);
          })(item.split('='));
        }),
        q
      );
    })({});
  })(search.split('?')[1]);
};
```

### 获取 URL 参数

```js
export const getQueryString = key => {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg);
  return r === null ? null : unescape(r[2]);
};
```

### 测试质数

```js
export const isPrime = num => !/^.?$|^(...+?)\1+$/.test('1'.repeat(num));
```

### 统计字符串中相同字符出现的次数

```js
const str = '中国中中国中中国中';
export const getInfo = str =>
  str.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
```

##


<i-back-top></i-back-top>
