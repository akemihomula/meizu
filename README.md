# meizu项目

## Project setup
```
// 安装项目依赖
npm install
```

### Compiles and hot-reloads for development
```
// 启动项目服务
npm run serve
```

### Compiles and minifies for production
```
// 项目打包
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 后台未开启
暂不支持登录注册功能

## 打包代码
meizu>build为打包代码

## 如果要使用后台登录注册功能
1. 进入src>server 内运行nodejs ---- 终端输入$ node login.js
2. 进入src>main.js 将连接修改为本地ip地址
3. 在meizu下运行项目 $ npm run serve

## 使用打包后的登录注册功能
1. 进入src>main.js 将连接修改为本地ip地址
2. 在meizu下打包文件 $ npm run build 文件会自动更新build>dist
3. 进入src>server 内运行nodejs ---- 终端输入$ node login.js
4. 进入build内运行ndoejs $ node index.js
5. 本地访问http://127.0.0.1:8080即可看到打包项目

