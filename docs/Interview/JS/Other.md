::: tip
其他
:::

### parseInt

```js
[1, 2, 3].map(parseInt); // [1, NaN, NaN]
```
::: tip

parseInt 函数有两个参数, 第一个参数为需转换的字符串, 第二个参数为基数(2 - 36之间的整数), 如果基数(radix) 不存在于范围之内, 解析为 `NaN`, 第一个参数若开头不为数字或者16进制的字符时, 解析为 `NaN`, 如果参数不为字符串, 调用 `toString`方法转换为字符串, 默认基数 为十进制

map 为数组高阶函数, 迭代循环, 接收一个 callback, callback 有三个参数 item, index, array 返回一个每个元素所执行callback 所得到的值组成的新数组
- [parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

- [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
:::


<i-back-top></i-back-top>
