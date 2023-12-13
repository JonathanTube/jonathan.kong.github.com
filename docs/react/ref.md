## Ref 对于普通标签的使用

:::tip

- 组件类型

  - 受控组件: 基于修改数据/状态，让视图更新，达到需要的效果(推荐)
  - 非受控组件: 基于 ref 获取 DOM 元素，我们操作 DOM 元素，来实现需求和效果(偶尔)

:::

```js title="使用 3 种不同的方式 this 中显示示意如下："
  Demo {
    // ...
    refs : {
        div1 : {actualDom}
    },
    div2: {
        actualDom
    },
    div3 : {
        current: actualDom
    }
    // ...
  }
```

```js title="使用方式"
import React from "react"
export default class Demo extends React.Component {
  div3 = React.createRef() // 创建一个空的ref对象 this.div3.current = null
  render() {
    return (
      <div>
        <div ref="div1">使用this.refs.div1获取到，如果开启了React.strictMode会报错/div>
        <div ref={(currentDOM) => (this.div2 = currentDOM)}>
          可以使用ref后的函数赋值actualDOM，然后使用this.div2获得
        </div>
        <div ref={this.div3}>
          可以使用React.createRef()，创建ref对象后,将当前dom复制给它，好像加不加this都一样
        </div>
      </div>
    )
  }
  componentDidMount() {
    // 这时候virtualDOM已经传唤为actualDOM,可以获取actualDOM了
    console.log(this.refs.div1) // 如果开启了<React.strictMode>会报错
    console.log(this.div2)
    console.log(this.div3.current)
  }
}
```

## Ref 对于类组件的使用

```js
import React from "react"

// 函数组件直接使用ref会报错
const FunctionalComponentChild = () => {
  return <div>functional component</div>
}

// 将函数组件包在React.forwardRef中使用
const FunctionalComponentChild2 = React.forwardRef(
  function FunctionalComponentChild2(props, ref) {
    return (
      <>
        <div ref={ref}>将函数组件包在React.forwardRef中使用</div>
      </>
    )
  }
)

class Child extends React.Component {
  state = {
    x: 1,
    y: 2,
  }
  render() {
    return <div>这是子组件</div>
  }
}

export default class Demo extends React.Component {
  div3 = React.createRef()
  render() {
    return (
      <>
        <Child ref={(dom) => (this.child1 = dom)}></Child>
        <FunctionalComponentChild ref={(dom) => (this.child2 = dom)} />
        <FunctionalComponentChild2 ref={(dom) => (this.child3 = dom)} />
      </>
    )
  }
  componentDidMount() {
    // 可以拿到类组件的对象
    console.log(this.child1)
    // 函数组件上直接使用ref，会报错
    console.log(this.child2)
    // 使用React.forwardRef包裹functional component后，就可以只用ref了
    console.log(this.child3)
  }
}
```
