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
    "proxy": {
      "/api/lc": {
        // "target": "http://192.168.1.214:20080",
        "target": "http://120.55.81.129:9999/",
        "changeOrigin": true,
        // "pathRewrite": { "^/api/lc" : "" }
      }
    }
  };