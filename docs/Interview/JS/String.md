---
sidebar: auto
---

::: tip
字符串
:::

## String

### 去重

::: tip
给指定字符串,去重
:::

```js
const str = 'abcdedabcd';

/**
 * @name: duplicateZero
 * @desc:
 * 此方法使用了 ES6中的方法, 兼容行不好
 *  直接使用 new Set 过滤
 */
function duplicateZero(str) {
  if (str.length === 1) return str;
  return [...new Set(str)].join('');
}

/**
 * @name: duplicateOne
 * @desc:
 * 此方法使用了 ES6中的方法, 兼容行不好
 * 1. 转换为数组
 * 2. 使用 new Set 给数组去重
 * 3. Array.prototype.join 转换为字符串
 */
function duplicateOne(str) {
  if (str.length === 1) return str;
  return [...new Set(str.split(''))].join('');
}

/**
 * @name: duplicateTwo
 * @desc:
 * 1. split 转换为数组
 * 2. 使用 indexOf
 * 3. 字符串拼接
 */
function duplicateTwo(str) {
  if (str.length === 1) return str;
  let newStr = '';
  str.split('').forEach((item) => {
    if (newStr.indexOf(item) === -1) {
      newStr += item;
      // newStr.concat(str[i]);
    }
  });
  return newStr;
}

/**
 * @name: duplicateThree
 * @desc:
 */
function duplicateThree(str) {
  if (str.length === 1) return str;
  let newStr = '';
  for (let i = 0, len = str.length; i < len; i ++) {
    if (newStr.indexOf(str[i]) === -1) {
      newStr += str[i];
      // newStr.concat(str[i]);
    }
  }
  return newStr;
}

/**
 * @name: duplicateFour
 * @desc: includes ES6 需考虑兼容
 */
function duplicateFour(str) {
  if (str.length === 1) return str;
  let newStr = '';
  for (let i = 0, len = str.length; i < len; i ++) {
    if (!newStr.includes(str[i])) {
      newStr += str[i];
      // newStr.concat(str[i]);
    }
  }
  return newStr;
}

/**
 * @name: duplicateFive
 * @desc: includes + array ES6 需考虑兼容
 */

function duplicateFive(str) {
  if (str.length === 1) return str;
  let newArr = [];
  str.split('').forEach(item => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr.join('');
}

/**
 * @name: duplicateSix
 * @desc: Array.prototype.filter + String.indexOf
 */

function duplicateSix(str) {
  if (str.length === 1) return str;
  return str.split('').filter((item, index) => str.indexOf(item) === index).join('');
}

/**
 * @name: duplicateSeven
 * @desc: 对象属性
 */

function duplicateSeven(str) {
  if (str.length === 1) return str;
  const obj = {};
  let newStr = '';
  for (let i = 0, len = str.length; i < len; i ++) {
    if (!obj[str[i]]) {
      obj[str[i]] = str[i];
      newStr += str[i];
      // newStr.concat(str[i]);
    }
  }
  return newStr;
}
```

<i-back-top></i-back-top>
