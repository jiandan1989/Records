### 生命周期

- getDefaultProps: 设置组件的默认属性, 常用于子组件接收父组件传递的属性值为空时
- getInitialState: 在 `createReactClass` 中创建本身组件的 `state`值, 但如果使用 `class`创建组件时, 可使用`this.state={}` 方法
- componentWillMount: 组件还未挂载 `DOM`, 不推荐在此生命周期中请求数据, 本未挂载`dom`,此时请求,若返回数据为空, 导致页面显示空白
- render: 创建虚拟`DOM`, 此时不能更新`state`, 进行`diff` 算法
- componentDidMount: 挂载`DOM`, 此时可以发送请求, 设置 `setState`, 重新触发 `render`,
- componentWillReceiveProps: 接收一个参数 `nextProps`, 对比最新的 `props`值进行其他曹州, 此处可以使用 `setSate`
- shouldComponentUpdate: 接收两个参数 `nextProps, nextState`, 可用于优化项目性能, 判断组件是否需要重新更新, 默认`return true`, 若不需要重新渲染则 `return false`
- componentWillUpdate: 当 shouldComponentUpdate 返回 `true`时, 将进入重新渲染的过程, 此时可以拿到 `nextProps, nextState`
- render: 将重新渲染组件, `16`版本可以允许返回 数组 和 字符串
- componentDidUpdate: shouldComponentUpdate 返回 `false`时 不会进入此周期,
- componentWillUnmout: 卸载组件, 此时需要将 计时器,监听事件销毁掉

### setState

> 不能使用 `this.setState({ s: this.state.s + this.props.s })`, setState 可能是异步合并, 但是不能保证`this.props` 和 `this.state`的值为最新值, 应该使用

> 不管在何处调用 `setState`, 或者是并没有修改 `state` 中的值, 也将会进行重新渲染

```js
this.setState((prevState, props) => ({
  s: prevState.s + props.s
}));
```

### 其他

- forceUpdate: 一般情况下,修改 state 和 props 的值是会进行重新渲染, 但是有时可能会有问题, 使用此方法将对组件进行强制渲染
- defaultProps: 组件接收父组件设置的默认值
- displayName: 不需要显示设置, 常用于调试信息,因为它是从定义组件的函数或类的名称推断出来的

<i-back-top></i-back-top>
