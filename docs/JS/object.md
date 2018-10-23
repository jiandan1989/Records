---
sidebar: auto
---

::: tip
JS 高级设计(第三版)
:::

## 属性

### 数据属性

::: tip
数据属性包含一个数据值的位置, 有 4 个描述其行为的特性
:::

- Configurable: 表示能否通过 `delete` 删除属性从而重新定义属性,能否修改属性的特性,或者能否吧属性修改为访问器属性

- Enumerable: 表示是否可以使用 `for in` 遍历返回属性

- Writable: 表示能否修改属性的值

- value: 包含这个属性的数据值, 读取属性值的时候, 从这个位置度, 写入属性值的时候, 把新值保存在这个位置,特性的默认值是 `undefined`

> 如果想要修改属性默认的特性, 必须使用[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```js
// obj: 属性所在的对象
// key: 属性的名字
// 一个描述对象

Object.defineProperty(obj, key, {
  configurable: true,
  enumerable: true,
  writable: true,
  value: value
});

Object.defineProperties(obj, {
  property1: {
    configurable: true,
    value: value
  },
  property2: {
    configurable: true,
    value: value
  }
});
```

> 也可以使用 [Object.defineProperties](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) 定义多个属性, 使用和 [Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)相同

### 访问器属性

::: tip
访问器属性不包含数据值, 包含一堆 `getter` 和 `setter` 函数,读取值时调用 `getter`函数, 设置值时调用 `setter` 函数
:::

```js
Object.defineProperty(obj, key, {
  configurable: true,
  enumerable: true,
  get: function() {
    return value;
  },
  set: function(newValue) {
    obj[key] = newValue;
  }
});
```

### 读取属性特性

::: tip
ECMAScrpt 5 中 `Object.getOwnPropertyDescriptor` 方法,可以读取给定属性的描述符, 返回是一个对象,如果是访问器属性, 则返回 `configurable, enumerable, get, set`, 如果是数据属性则返回 `configurable, enumerable, writable, value`
:::

## 模式

### 工厂模式

::: tip
封装函数, 传递参数, 创建出多个类似的对象, 但是不能解决对象识别的问题
:::

```js
funciton createObj (name, age) {
  const o = {};
  o.name = name;
  o.age = age;

  return o;
}
```

### 构造函数模式

::: tip
按照惯例, 构造函数和普通函数类似, 只是以大写字母开头, 为了区分和普通函数的区别
:::

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

::: tip

#### 和普通函数的不同

1. 没有显示的创建对象
2. 直接将属性和方法赋给了 `this` 对象
3. 没有 `return` 语句
4. 需要使用 `new` 关键字

<i-divider></i-divider>

#### 使用构造函数创建对象的过程

1. 创建一个对象
2. 将构造函数的作用域赋给新对象(因此`this` 指向新对象)
3. 执行构造函数中的代码(为新对象添加属性)
4. 返回新对象

<i-divider></i-divider>

#### 缺点

1. 如果不使用 `new` 关键字创建对象, 在非严格模式下, `this` 指向 `window`
2. 创建多个实例时, 为每一个实例都创建了一个方法的副本

<i-divider></i-divider>

:::

#### 原型模式

::: tip
每一个函数都有一个 `prototype` 属性,这个属性是一个指针,指向一个对象,用于是包含特定类型的所有实例属性和方法
:::

```js
function Person() {}
Person.prototype.name = 'name';
Person.prototype.age = 12;
```

::: tip

#### 原型对象

每一个原型(`prototype`)中都包含了一个 `constructor`属性, 此属性是一个指针,

1. 使用原型创建对象时, 多个实例共享所有原型上的方法以及属性, 实例的 `constructor` 将会指向创建实例函数的原型对象

:::

<i-back-top></i-back-top>
