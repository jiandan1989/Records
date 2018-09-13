---
sidebar: auto
---

::: tip
使用 React 中的问题记录
:::

## 汇总

### 使用空标签

- [参考地址:](https://reactjs.org/docs/react-api.html#reactfragment)

> 在使用 React 中, 父组件中包含多个子组件不允许在 `return (多个子组件)`, 此时就必须使用一个空的标签来包裹, 大多数时 一般使用一个 `div`标签来包裹, 但此时的样式可能会出现问题,必须使用更多的代码来覆盖多出来的`div`标签, 在 `v16.2`中增加了一个允许包裹多个子组件的标签,在渲染时不会出现多余一个空的标签

- 使用 `React.Fragment`

```jsx
return (
  <React.Fragment>
    <h1>我是h1</h1>
    <h2>我是h2</h2>
    <h3>我是h3</h3>
  </React.Fragment>
);
```
- 使用 `<></>`

```jsx
return (
  <>
    <h1>我是标题1</h1>
    <h2>我是标题2</h2>
    <h3>我是标题3</h3>
  </>
);
```

### ref 的使用

[参考地址:](https://reactjs.org/docs/refs-and-the-dom.html)

> React 提供了可以获取子组件的方法

- 使用字符串创建`ref`, 使用`this.$ref[ref]`获取, 官方不提议使用该方法,不再支持

```jsx
class CustomCom extends React.Component {
  componentDidMount() {
    console.log(this.$ref.custom_ref);
  }
  render() {
    return (
      <div ref="custom_ref">我是ref</div>
    );
  }
}
```

- 使用 回调函数创建 `ref`

> ref 的值取决于节点的类型

- 当 `ref`用于`HTML`元素时, 接收底层`DOM`元素作为`current`
- 当`ref`用于自定义组件时, 获取到的为已挂载的实例
- 不能在函数组件(无状态)上使用`ref`属性,因为他们没有实例

```jsx
class CustomText extends React.Component {
  customMethod() {
    console.log(111111);
  }
  render() {
    return (
      <textarea defaultValue="text" />
    );
  }
}

class CustomCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputFocus = this.inputFocus.bind(this);
    this.customMethod = this.customMethod.bind(this);
  }

  customMethod() {
    if (this.customRef) {
      this.customRef.customMethod();
    }
  }
  inputFocus() {
    // 获取原生 html DOM 节点
    if (this.inputRef){
      this.inputRef.focus();
    }
  }

  render() {
    return (
      <React.Fragment>
        <CustomText ref={(el) => { this.customRef = el; }} />
        <button onClick={this.customMethod}></button>
        {/** 用于原生HTML DOM 节点 */}
        <input ref={(el) => { this.inputRef = el; }} />
        <button onClick={this.inputFocus}></button>
      </React.Fragment>
    );
  }
}

```

- 新增`React.createRef`

```jsx
class CustomCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
    this.inputFocus = this.inputFocus.bind(this);
  }
  inputFocus() {
    // 此时的 ref 是绑定在了 HTML DOM 节点上, 所以可直接获取到原生 DOM 节点
    this.inputFocus.current.focus();
  }
  render() {
    return (
      <React.Fragment>
        <input defaultValue="test" ref={this.inputRef} />
        <button onClick={this.inputFocus}>click me</button>
      </React.Fragment>
    );
  }
}

```

### 三元运算符

> 使用三元运算符时,经常用于切换组件渲染, 若是渲染有状态的组件时, `return null`时, 同样会触发子组件的声明周期, 可以使用 另一个组件包装来避免声明周期的调用

<!-- @TODO 待修改, 参考 自定义组件 销毁 -->

```jsx
class CustomWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.showComponent !== this.props.showComponent && nextProps.showComponent) {
        this.setState({
          component: this.props.children;
        });
      }
    }
    render() {
      render() {
        return (
          <>
            {this.state.component}
          </>
        );
      }
    }
  }
}

/** @TODO 使用 **/


```


### jsx 语法糖

- 使用默认值 为 `true`时, 可省略

```jsx
<MyTextBox autocomplete />
```

- 忽略布尔值为空的值 `false, null, undefined` 和 `true`, 但是一些其他的[假值](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), 比如`0`


### 生命周期修改

- componentWillReceiveProps---> UNSAFE_componentWillReceiveProps()


### 阻止默认事件

[参考地址 W3C](https://www.w3.org/TR/DOM-Level-3-Events/)

- 常规使用 `return false`来阻止 `html 事件的默认事件`
- 在React 中不需要使用此方法

```jsx
function handleClick(e) {
  e.preventDefault();
}
```

### setState

> setState有两个参数`setState(stateChange, callback)`, 而在我们使用`setState`之后,不能立即使用`this.state`获取修改的值,因为`setState`为异步, 但提供了回调函数可立即获取修改的值

- 获取修改的 state 的值

```jsx
handleClick() {
  this.setState({
    customText: '自定义'
  }, () => {
    console.log(this.state.customText);
  })
}

```

- 不建议使用 `this.setState({ flag: !this.state.flag })`, 因为`setState` 合并多个统一更新, 也可以使用函数来更新, 调用`setState`时,不能确定此时的值是最新的

```jsx
/**
 * prevState: 上一个state的存照
 * props: 此时的 props值
*/
handleClick() {
  this.setState((prevState, props) => ({
    flag: !prevState.flag,
    value: props.value,
  }), () => {
    console.log(this.state.flag, this.state.value);
  });
}

```
