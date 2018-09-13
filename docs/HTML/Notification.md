---
sidebar: auto
---

# Notification

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)

## 使用方法

```javascript
let notification = new Notification(title, options);
```

::: tip
用于网站中有新的推送信息时,通知接口用于向用户配置和显示桌面通知,相比于`alert` 或者 `modal框`来说,更人性化
:::

- title: 一定会被显示的通知标题
- options: 可选配置,一个被允许用来设置通知的对象
  - dir: 文字的方向,auto(自动),ltr(从左到右),rtl(从右到左)
  - lang: 指定通知中所使用的语言
  - body: 通知中额外显示的字符串
  - tag: 赋予通知一个 ID,以便在不要的时候对通知进行刷新,替换或移除
  - icon: 一个图片的 URL,将被用于显示通知的图标

## 静态属性

- permission: 只读属性,一个用于表明当前通知显示授权状态的字符串,`denied`(用户拒绝了通知的显示)`granted`(用户允许了通知的显示)或者`default`(因为不知道用户的选择,所以浏览器的行为与`denied`时相同)

- 实例属性: title(只读属性,标题), dir(只读属性,文字显示的方向),lang(只读属性,通知的语言), body(只读属性,通知的文本内容), tag(只读属性,通知的 ID),icon(只读属性,通知的图标图片 URL 地址)

## Events

- onclick: 处理`click`事件的处理,每当用户点击通知时触发
- onshow: 处理`show`事件的处理,当通知显示的时候被触发
- onerror: 处理`error`事件的处理,每当通知遇到错误时被触发
- onclose: 处理`close`事件的处理,当用户关闭通知时触发

## Methods

- requestPermission(): 用于当前页面想用户申请通知的权限,这个方法只能被用户行为调用(比如: onclick 事件),并且不恩能被其他的方式调用
- 实例方法: Notification 对象继承自 EventTarget 接口
- close: 用于关闭通知
- addEventListener: 对 Notification 监听事件
- removeEventListener: 移除监听事件
- dispatchEvent: 触发某一事件,函数

## Example

```js
function notifyMe() {
  // 检查浏览器是否支持
  if (!('Notification' in window)) {
    alert('浏览器不支持');
    return false;
  }
  // 检查用户是否同意接受通知
  else if (Notification.permission === 'granted') {
    var notification = new Notification('Hi there!');
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        var notification = new Notification('Hi there!');
      }
    });
  }
}
```

- 最后 出于尊重,如果用户已经授权接收通知信息,就不要再打扰

<i-back-top></i-back-top>
