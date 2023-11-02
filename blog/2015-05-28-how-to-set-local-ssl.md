# 如何设置本地ssl测试环境

## 一、通过mkcert创建本地证书并加载

1. 安装mkcert
```
  npm install -g mkcert
```

2. 生成证书
```
  mkcert create-ca
  mkcert create-cert
```
生成了四个文件
```
  ca.crt
  ca.key
  cert.crt
  cert.key
```

## 加载证书
### mac
- 双击ca.cert，在弹出的界面选择Test CA，选择“信任”，然后选择“始终信任”，最后输入密 码确认即可
### windows
- 双击ca.crt，在弹出的界面中选择安装证书，选择“当前用户”或“本地计算机”均可，关键的是下一步，选择“将所有的证书都放入下列存储”，并且选择为“受信任的根证书颁发机构”，然后一路确定即可

## 二、在vue或uniapp中使用刚刚的证书
1. vue2
```js
// vue.config.js
const path = require('path')
const fs = require('fs')
module.exports = {
  devServer: {
    open: true,
    https: {
      cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
      key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key'))
    }
  }
}

```
2. vue3
```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const fs = require('fs')
const path = require('path')
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  server: {
    open: true,
    https: {
      // 主要是下面两行的配置文件，不要忘记引入 fs 和 path 两个对象
      cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
      key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key'))
    }
  }
})
```

3. uniapp
```json
// manifest.json
"h5" : {
        "devServer" : {
            "https" : {
                "cert" : "复制cert.cer中的全部内容，换行转换为\n"
                "key" :  "复制cert.key中的全部内容，换行转换为\n"
            },
            "proxy" : {} // 这个必须在这里配置，因为vue.config.js中的会冲突
        },
        "async" : {
            "delay" : "10000"
        },
        "router" : {
            "base" : "./"
        }
    }
```