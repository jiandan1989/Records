### CSS 中的居中可分为水平居中 (行内元素居中 和 块级元素居中)和 垂直居中, 块级元素居中又分为定宽块级元素居中和不定宽块级元素居中

- 行内元素居中: 常见的行内元素比如 a, img,span 以及文字等的水平居中,通常是使用`text-align: center`;来实现,垂直居中使用`line-height`来实现

```html
<div class="test">
	<a href="javascript:;">测试</a>
</div>
```

```css
.test {
  text-align: center;
  line-height: 50px;
  /* 垂直居中 也可以对父级元素使用相同的 padding 值来实现*/
  padding-top: 10px;
  padding-bottom: 10px;
}
```

- 定宽元素的水平居中: div 在默认情况下是充满全屏的宽,高度由子元素撑开,所以可以使用`margin: 0 auto;`来实现水平居中, 垂直居中需要使用定位方法(需要知道子元素的高度)

```html
<div class="test-parent">
	<div class="test-child">我是子元素</div>
</div>
```

> 水平居中

```css
.test-child {
  margin: 0 auto; /* 水平居中*/
  position: absolute;
  top: 50%;
  margin-top: -100px;
  width: 300px;
  height: 200px;
  background: blue;
}
```

> 已知子元素高度和宽度,水平居中和 垂直居中(position)

```css
.test-parent {
  position: relative;
}

.test-child {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -100px;
  width: 300px;
  height: 200px;
  background: blue;
}
```

> 未知子元素高度情况下可以使用`transform`(不考虑兼容性), 使用 transform 有一个缺陷,就是当计算值有小数时,看着有点模糊,解决方法(`父级元素添加transform-style: preserve-3d;`)

```css
.test-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
```

> 不考虑兼容性情况下,所有的居中都可以使用`flex`来实现,不管是已知高度或不知高度,单个或者多个子元素都可以

> 参考地址:

- [阮一峰 / Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

- [阮一峰 / Flex 语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

```html
<div class="test-parent">
	<div class="test-child">1</div>
	<div class="test-child">2</div>
</div>
```

```css
.test-parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

> 还有一种是使用`grid`布局方法,目前支持度较低,暂不考虑
