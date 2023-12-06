---
title: vuex简单使用
tags: [frontend, vue, vuex]
---

## 项目根src目录建立store文件
 - /src/store/index
 
```js
import { createStore } from 'vuex' // 导入
import { toRaw } from 'vue' // 这里是比较迷惑的，vue3需要用到；但是既然是vue3了为什么不用pinia

const store = createStore({
  state: {
    myState: '' // 定义一个state变量，也可以是对象类型
  },
  mutations: {
    setMyState: (state, payload) => {
      state.myState = payload.value
    }
  },
  // 可以不添加action，但是action结合dispatch使用是异步调用
  actions: {
    handlerMyState: (context, payload) => {
      context.commit('setMyState', payload)
    }
  },
  getters: {
    getMyState: (state) => {
      return toRaw(state.myState) // 如果是vue3返回的会是proxy，需要用toRaw解构一下拿到真实的值
    }
  }
})

export default store
```

## main.js中配置
```js title="vue3版本"
import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // 导入/src/store/index.js
const app = createApp(App)
app.use(store) // 挂载
app.mount('#app')
```

```js title="vue2版本"
import Vue from 'vue'
import App from './App.vue'
import store from './store'
new Vue({
  store, // 一点小差别
  render: h => h(App),
}).$mount('#app')
```

## vue文件中使用
```js title="vue3"
{/* <script setup> */}
  import { useStore } from 'vuex'
  const store = useStore()
  // 同步调用，setMyState是mutations中的方法名
  store.commit("setMyState", { value: 'my value' })
  // 异步dispatch修改值，handlerMyState是action中的方法名
  store.dispatch('handlerMyState', { value: 'my value' })
// </script>

<span>{{store.getters['getMyState']}}</span>
```

```js title="vue2"
this.$store.state.myState
<span>{{$store.state.myState}}</span>
```