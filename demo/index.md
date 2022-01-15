### super()

如果父级想使用原型上继承的方法，那么就可以使用 `this.__proto__.xxxx` 来调用，如下

```js
const obj1 = {
  name: '张三',
  sayName() {
    // 当父级调用 sayName 的时候，这里的 this 指向的是当前对象 所以 name 就是 张三
    console.log(this.name)
  },
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    // 这里调用 say 方法，我希望使用原型上 obj1 的方法
    this.__proto__.sayName()
  },
}

obj2.say()
```

但是上面的问题就是：在 say 中调用原型方法，但是返回的却是原型对象上的属性，这显然是不对的，所以还需要进一步使用 `call` 关键字来进行更改 `this` 指向，并将当前对象传递过去

```js
const obj1 = {
  name: '张三',
  sayName() {},
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    this.__proto__.sayName.call(this)
  },
}

obj2.say()
```

所以这也就大概实现了 `super()` 的原理实现

视频教程地址：[super 原理分析](https://www.bilibili.com/video/BV1NJ411W7wh?p=246)

> 在父类的构造函数中必须调用 super()，并且 this 必须在 super 之后使用
