---
sidebar: auto
pageClass: custom-page
---

# 字符串

<a><i-button type="primary">@TODO</i-button></a>

## 属性

### length
> 返回字符串的长度

## 方法

### split
> 以分隔符将字符串分割成数组
> split(separator, limit): separator: 分隔符可以是正则表达式 默认(''), limit: 返回分割数组的前 n个元素

```js
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);
// Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand


// 使用正则匹配
const re = /\s*;\s*/;

const myString = "Hello 1 word. Sentence number 2.";
// 正则捕获
const reCap = /(\d)/;
const splits = myString.split(reCap);
console.log(splits); // [ "Hello ", "1", " word. Sentence number ", "2", "." ]

const nameList = names.split(re);
const nameListLimit = names.split(re, 2);

console.log(nameList); // Harry Trump,Fred Barney,Helen Rigby,Bill Abel,Chris Hand
console.log(nameListLimit); // ["Harry Trump", "Fred Barney"]


```


### slice

```js

```

### substring

```js

```

### substr

```js

```

### localCompare

```js

```

### indexOf

```js

```

### lastIndexOf

```js

```

### search

```js

```

### match

- [参考地址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)

> 接受一个正则表达式对像, 如果传入的值为非法的正则表达式, 将会隐式的使用 `new RegExp(obj)` 转换为正则表达式, 如果不提供任何参数, 将会得到一个包含空字符串的数组 [""]

```js



```

### replace

```js

```

### toLowerCase

```js

```

### toUpperCase

```js

```

### charAt

```js

```

### charCodeAt

```js

```

### fromCharCode
```js

```

<i-divider></i-divider>

> 以下为 新增, 需考虑兼容性

### includes
> 查看字符串中是否包含指定字符

### repeat
> 接受参数 count: 为指定重复次数, 介于 0 和 正无穷大之间的整数, 不能为负数, 必须小于 infinity, 且重复得到的字符串不会大于最长字符串

```js

```


### padEnd

```js

```

### padStart

```js

```

### startsWidth

```js

```

### endWith

```js

```

### trimLeft

```js

```

### trimRight

```js

```

### fromCodePoint

```js

```




### 

<i-back-top></i-back-top>