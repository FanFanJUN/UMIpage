### [UmiJS-可插拔的企业级 react 应用框架](https://umijs.org/zh/)

- 插件化
- 开箱即用
- 约定式路由

#### 入门安装umi

```
# 安装
$ yarn global add umi # 或者 npm install -g umi

# 新建应用
$ mkdir myapp && cd myapp

# 新建页面
$ umi generate page index

# 本地开发-启动
$ umi dev

# 构建上线-打包
$ umi build
```
#### [通过脚手架创建项目](https://umijs.org/zh/guide/create-umi-app.html#%E4%BB%8B%E7%BB%8D-create-umi)

```
$ mkdir myapp && cd myapp
$ yarn create umi

? Select the boilerplate type
❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplat
e, use together with umi block.
  app             - Create project with a simple boilerplate, support typescript
.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.

$ cnpm install (安装完后)
$ umi dev(启动)
```
#### 约定式目录

```
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json
```
#### [配置config.js](https://umijs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)
- config.js内容
```
import pageRoutes from './router.config'
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        enable: true, // default false
        default: 'zh-CN', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
    },
  ], 
]
export default {
    plugins,
    routes: pageRoutes,
  };
```
- router.config

```
export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      { path: '/', redirect: '/dashboard' },
      { path: '/dashboard', component: './dashboard'},
    ],
  },
];
  
```

#### [plugins插件](https://umijs.org/zh/plugin/)
- [umi-plugin-react
](https://umijs.org/zh/plugin/umi-plugin-react.html)
- 安装

```
$ yarn add umi-plugin-react --dev
```
- 使用

```
export default {
    plugins: [
      ['umi-plugin-react', {
      
        antd: true, # 启用后自动配置 babel-plugin-import 实现 antd, antd-mobile 和 antd-pro 的按需编译，并且内置 antd, antd-mobile 依赖，无需手动在项目中安装
      }],
    ],
  };
```
#### [antd组件](https://ant.design/index-cn)
- 使用 npm 或 yarn 安装

```
$ npm install antd --save (或者cnpm)
$ yarn add antd
```
