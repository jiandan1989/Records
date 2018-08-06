---
sidebar: auto
---

# React

- [原文链接](https://www.cnblogs.com/wonyun/p/5930333.html)

## 无状态组件

::: tip
纯展示组件,只负责渲染从 props 传递的值,不涉及到`state`状态的操作
:::

```js
// ES6 箭头语法
const HelloComponent = props => <div>{props.title}</div>;

ReactDOM.render(<HelloComponent title="标题" />, mountNode);

// ES5的方式
function HelloComponent(props) {
  return <div>{props.title}</div>;
}

ReactDOM.render(<HelloComponent title="标题" />, mountNode);
```

> 特点

- 组件不会被实例化,整体渲染性能得到提升,无状态组件就不会有实例化的过程,无实例化过程也就不需要分配多余的内存

- 组件不能访问`this`对象, 无状态组件由于没有实例化过程,所以无法访问组件 this 中的对象

- 组件无法访问声明周期的方法,无状态组件是不需要组件声明周期管理和状态管理,所以底层实现这种形式的组件是不会实现组件的声明周期方法,所以无状态组件是不能参与组件的各个声明周期管理的

- 无状态组件只能访问输入的 props,同样的 props 会得到同样的渲染结果

- 无状态组件被鼓励在大型项目中尽可能以简单的写法来分割原本庞大的组件

- ES5 的方式:React.createClass

```js
var InputControES5 = React.createClass({
 propTypes: {// 定义传入props中的属性各种类型
   initialValue: React.propTypes.string,
 },
 defaultProps: { // 组件默认的props对象
   initialValue; '',
 },
 // shezhi initial state
 getInitialState: function() { // 组件相关的状态对象
   return {
     text: this.props.initialValue || 'placehodler'
   };
 },

 handleChange: function(event) {
   this.setState({
     text: event.target.value
   });
 },
 render: function() {
   return (
     <div>
       Type Something;
       <input onChange={this.handleChange} value={this.state.text} />
     </div>
   );
 }
});

InputControES5.propTypes = {
 initialValue: React.PropTypes.string
};

InputControES5.defaultProps = {
 initialValue: '', // 设置默认值,如果props中没有传入 initialValue
}
```

> 特点:

- React.createClass 会自绑定函数方法,(不像 React.Component 只绑定需要关心的函数) 导致不必要的性能开销,增加代码过时的可能性

- React.createClass 的`mixins`不够自然,直观,React.Component 形式非常适合高阶组件,它以更直观的形式展示了比`mixins`更强大的功能,

- ES6 的方式

```js
class InputControES5 extends React.Component {
  constructor(props) {
    super(props);

    // 设置initial state
    this.state = {
      text: props.initialValue || 'placeholder'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
      </div>
    );
  }
}

InputControES5.propTypes = {
  initialValue: React.PropTypes.string
};

InputControES5.defaultProps = {
  initialValue: ''
};
```

# React.Component 和 React.createClass 的区别

- 函数`this`自绑定

> React.createClass 创建的组件,其每一个成员函数的 this 都有 React 自动绑定,任何时候使用,直接调用 this.method 即可,函数中的`this`会被正确设置

```js
const Contacts = React.createClass({
  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <div onClick={this.handleClick} />
    );
  }
});
```

> React.Component 创建的组件,其成员函数不会自动绑定`this`,需要开发者手动把滚顶,否则`this`不能获取到当前的实例对象

```js
class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log(this); // null
  }

  render() {
    return <div onClick={this.handleClick} />;
  }
}
```

> 当然 React.Component 有三种手动绑定方法,可以在构造函数中完成绑定,也可以在调用时使用 method.bind(this)绑定,还可以使用`arrow function`来绑定

```js
// 在构造函数中绑定this
constructor(prosp) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

// 使用bind 来绑定

<div onClick={this.handleClick.bind(this)} />

// 使用arrow function 绑定

<div onClick={() => this.handleClick} />
```

## 组件属性类型

::: tip
`propTypes`以及其默认 props 属性 defaultProps 配置不同
:::

> React.createClass 在创建组件时,有关组件 props 的属性乐行以及组件默认的属性会作为组件实例的属性来配置,其中 defaultProps 是使用`getDefaultProps`的方法来获取默认组件属性

```js
const TodoItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      name: '',
    };
  }

  render () {
    return (
      <div></div>
    );
  }
});
```

> React.Component 在创建组件时配置这两个对应信息时,他们是作为组件类的属性,不是组件实例的属性,也就是所谓的类的静态属性来配置的,

```js
class TodoItem extends React.Component {
  static propTypes = {
    // 类的静态属性
    name: React.PropTypes.string
  };

  static defaultProps = {
    // 类的静态属性
    name: ''
  };
}
```

## 组件初始状态 state 的配置不同

::: tip
React.createClass 创建的组件,其状态是 state 通过`getInitialState`方法来配置组件相关的状态

React.Component 创建的组件,其状态 state 是在`constructor`中像初始化组件属性一样声明的
:::

```js
const TodoItem = React.createClass({
  getInitialState() {
    return {
      isEditing: false
    }
  }

  render () {
    return (
      <div></div>
    );
  }
});


class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
  }
  render () {
    return (
      <div></div>
    );
  }
}
```
