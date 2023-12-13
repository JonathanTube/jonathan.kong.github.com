## 1. Why React Hooks?

- maintain state and side effects in React functional components.
- 维护 react 组件的状态和副作用，这区别于使用 class component 的方式创建组件。

## 2. useState

```js
const INITIAL_STATE = []
const App = () => {
  const [items, setItems] = useState(INITIAL_STATE)
  return (
    // some code
  )
}
```

## 3. useEffect

```js
useEffect(() => {
  // some code
}, [someProp, someState])
// The first function as the first argument
// will be executed depending on the changes of the second array function
```

## 4. useContext

useContext provides the current context value of the context object passed to it. The useContext hook relies on nearest Context Provider to determine the current value for that context.

```js
import React, { createContext, useContext } from "react"
const ThemeContext = createContext("green")

const App = () => {
  return (
    <ThemeContext.Provider value={"green"}>
      <Content />
    </ThemeContext.Provider>
  )
}

const Content = () => {
  const theme = useContext(ThemeContext)
  return <Button theme={theme} />
}
```

## 5. useReducer

- useReducer hook is an alternative to useState. It offers more control on the next state value based on a given action.
- useReducer can be used in the following scenarios:
  - The shape of state object is complex. Maintain multiple items within the same state object.
  - Access previous state value to update the next state.
  - Apply special logic on certain actions to calculate the next state.

```js
import React, { useReducer } from "react"
const INITIAL_STATE = { count: 0 }
// important code.
const reducer = (state, action) => {
  const { type } = action || {}
  if (!type) throw new Error("Action type must be defined")
  switch (type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      throw new Error("Did you misspell an action type?")
  }
}
const App = () => {
  // important code.
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <div className="App">
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  )
}
```

## 6. useCallback

- 返回值：一个缓存的回调函数
- 使用场景：父组件更新时，通过 props 传递给子组件的函数也会重新创建，然后这个时候使用 useCallBack 就可以缓存函数不使它重新创建
- useCallback hook accepts two arguments: An inline callback function and an array of dependencies. useCallback returns a memoized reference to the callback function when the - dependencies do not change.

```js
const memoizedCallback = useCallback(() => {
  calculateFn(input) // This function can return something.
}, [input])
```

## 7. useMemo

- 返回值：一个缓存的值
- 使用场景：组件更新时，一些计算量很大的值也有可能被重新计算，这个时候就可以使用 useMemo 直接使用上一次缓存的值
- useMemo hook accepts two arguments: A callback that returns the result of an expensive compute function and an array of dependencies.
- useMemo returns the last cached result if the dependencies do not change.

```js
const memoizedValue = useMemo(() => {
  getExpensiveCalculationResult(input) // This function can return something.
}, [input])
```

The differences between userMemo and useCallback：https://zhuanlan.zhihu.com/p/545578633

## 8. useRef

You can use useRef hook to get the ref of a DOM node. Later, you can use this ref for certain actions related to that node. For example, scrolling to an element position.

```js
// ...
const App = () => {
  const topSection = useRef(null)
  const handleClick = () => {
    window.scrollTo(0, topSection.current.offsetTop)
  }

  return (
    <Fragment>
      <div ref={topSection}>Top section</div>
      // ... some code.
      <button onClick={handleClick}>Go to top</button>
    </Fragment>
  )
}
// ...
```

## 9. useLayoutEffect

- useLayoutEffect is an alternative to useEffect for layout updates.
- useEffect 的函数会在组件渲染到屏幕之后执行, execute after rendering.
- useLayoutEffect 则是在 DOM 结构更新后、渲染前执行，(execute before rendering), 相当于有一个防抖(flickering)效果;
