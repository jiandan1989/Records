### React 中 this 绑定

- [参考地址](https://www.barrymichaeldoyle.com/bind-this/)

### 解决 React 未定义错误

> 有大约四种方法来解决`this`未定义错误

- 在事件中直接绑定`this`

```js
render() {
  return (
    <Button onClick={this.handler.bind(this)}>click me </Button>
  );
}

```

> 虽然这种方法可以解决 this 未定义错误,但是在组件的props 或者 state 改变时, 会导致 UI重新渲染, 每次都会创建一个新的函数副本,性能不好

- 在事件中使用箭头函数


```js
render() {
  return (
    <Button onClick={() => { this.handler(); }}>click me</Button>
  );
}
```

> 但是会出现同第一种方法一样,会重新渲染


- 类属性中的箭头函数 绑定 this

```js
export default class CounterButton extends Component {
  state = { counter: 0 }

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counte + 1
    }));
  }

  render() {
    return (
      <Button onClick={this.incrementCounter}>click me </Button>
    );
  }
}

```

> 这种方法相比之前两种方法, 代码更整洁,执行的更好, 并且还具有使渲染功能保持整洁的额外好处, 但是根据ReactJS的文档, 这并不是最好的方法, 不是推荐的方法

- 绑定在构造函数中

```js
export default class CounterButton extends Component {
  state = { counter: 0 }

  contructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  render () {
    return (
      <Button onClick={this.incrementCounter}>click me </Button>
    );
  }
}

```

> this 创建组件时绑定事件处理程序,只发生一次, 这也是 React 推荐的解决方案, 它的性能略好于上面的三种方法,


### 结论

::: tip
 什么时候不应该使用 `.bind(this)`, 如果 this 未在处理程序中使用, 则不需要绑定事件处理程序 this, 应该放在一个 util 文件中
:::