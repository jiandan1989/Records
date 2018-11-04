### 清除浮动的方法

- 使用伪元素, 给父级同级添加一个空标签或伪元素, 一般情况下使用伪元素

```css
.clear::before {
  display: 'block';
  content: '';
  width: 0;
  height: 0;
  clear: both;
}
```

- 父级元素添加固定高度

```css
.parent {
  height: 100px;
}
```

- 使用 overflow, 但不能同时设置父级高度,容易造成父级固定高度外的溢出

```css
.parent {
  overflow: hidden;
}
```
