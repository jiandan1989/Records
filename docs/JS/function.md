## 函数

### 原型对象

> 无论什么时候, 只要创建一个新函数, 就会根据一组特定的规则为该函数创建一个`prototype`属性, 这个属性指向函数的原型对象, 在默认情况下,所有原型对象都会自动获得一个`constructor(构造函数)`属性, 这个属性是一个指向`prototype`属性所在函数的指针,至于其他的方法都是从`Object`继承而来的
> , 当调用构造函数创建一个新实例后,该实例的内部将包含一个指针(内部属性).指向构造函数的原型对象,这个指针叫`[[Prototype]]`,脚本中没有标准的方式访问`[[Prototype]]`,但标准浏览器在每个对象上都支持一个`__proto__`,这个连接存在于实例于构造函数的原型对象之间,而不是存在于实例与构造函数之间,虽然实例中不包含属性和方法,但是我们却可以调用方法以及获取属性,这是通过查找对象属性的过程来实现的,虽然在所有实现中都无法访问到`[[Prototype]]`,但可以通过`isPrototypeOf()`方法来确定对象之间是否存在这种关系

---

- 可以通过 `isPrototypeOf()`方法来检测是否属于该原型
- `Object.getPrototypeOf()`获取实例的`[[Prototype]]`
- 实例的`__proto__`指向原型 `Person.prototype`
- 实例中添加和原型中的属性同名的值, 并不能修改原型中的值, 只是在获取实例的值是优先获取, 如果在实例中没有获取到属性值, 将会在原型中查找, 每个实例的属性值获取都将进行两次搜索, 优先实例,后原型
- 使用 `delete` 彻底删除实例中的属性, 而后查看属性将会展示原型中的属性值
- 使用`hasOwnProperty()`方法检测一个属性是否存在于实例中
- 使用 `in` 操作符来检测实例或者原型中是否包含某一属性, 此时不管存在于实例或者原型中, 只要包含就返回 `true`
- `for in`
- `Object.getOwnPropertyNames()`: 获取所有属性,包含不可枚举属性

```js
// 创建构造函数
function Person() {}
Person.prototype.name = 'name';
Person.prototype.sayHello = function() {
  console.log(this.name);
};
// 创建实例
const person1 = new Person();

// 查看实例的 __proto__ 属性, 无法访问 [[Prototype]]
person1.__proto__ === Person.prototype; // true

// 每一个函数都有一个 constructor 属性
Person.prototype.constructor === Person; // true

// 检测对象是否存在是使用构造函数创建
Person.prototype.isPrototypeOf(person1); // true

// ES5 新增方法 获取 [[Prototype]]
Object.getPrototypeOf(person1); // { name: 'name', contructor: function Person(){} }

// 为实例赋值
person1.name = '我是person 1';
person1.name === '我是person 1'; // true

// 删除实例中的属性
delete person1.name;

// 重新获取
person1.name === 'name'; // true 此时将会查找在原型中的属性

// 检测属性是否存在于实例中
person1.age = 100;
person1.hasOwnProperty('age'); // true
person1.hasOwnProperty('name'); // false 存在于原型, 实例中没有该属性

// in
'name' in person1; // true 存在于原型中
'age' in person1; // true 实例中
```
