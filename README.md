## 0 项目生成
  npm install -g create-react-app
  create-react-app 项目名
  npm eject 暴露wepack配置
  重新 npm i 依赖 （暴露后需安装新依赖）

## 1. 按需引入antd
package.json中
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  }

## 2. 引入less less-loader （less需2.7.3版本）
  /config/webpack.config.js
  1) const cssRegex = /\.(css|less)$/;
  2) getStyleLoaders中loaders = 末尾加 
    {
      loader: require.resolve('less-loader')
    }

## 3.更改全局变量
  app.less中引入 @import '~antd/dist/antd.less';
  覆盖less变量 @primary-color

## 4.修改端口号
  scripts/start.js
  将默认3000改为4000
  const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 4000;

## 5.反向代理proxy
  config/webpackDevServer.config.js
  proxy, 改为：
  proxy: {
    "/api": {
      "target": "http://127.0.0.1:3000",
      "changeOrigin": true
    }
  }



## 6.配置@
  config/webpack.config.js
  alias: {
    '@': paths.appSrc,
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
  },


## 7.引入jsonp
  npm i jsonp --save
  通过jsonp请求高德地图

## 8.引入axios
 npm i axios --save
  通过axios请求数据

## 9 兼容ie11问题
    yarn add react-app-polyfill
    src/index.js 第一行
    import 'react-app-polyfill/ie11';
    import 'react-app-polyfill/stable';

    package.json 修改
    "browserslist": [
      ">0.2%",
      "not dead",
      "ie 11",
      "not op_mini all"
    ]

## 10 兼容ie9
  问题1： SCRIPT5009: “Map”未定义
    在兼容ie 11的基础上修改
    npm install core-js mutation-observer --save

    import 'core-js/es';
    import 'mutation-observer';
    import 'react-app-polyfill/ie9';
    import 'react-app-polyfill/stable';
    
    webpack.config.js下
    entry: [
      paths.appIndexJs, // 放在第一位（调换位置）
       isEnvDevelopment &&
        require.resolve('react-dev-utils/webpackHotDevClient'),
    ]

    package.json 修改
    "browserslist": [
      ">0.2%",
      "not dead",
      "ie > 9",
      "not op_mini all"
    ]

    问题2： SCRIPT5007: 缺少对象  
    修复遗留问题setprototypeof

    npm install setprototypeof --save

    新建 polyfill.js

    import setprototypeof from  'setprototypeof';
    Object.setPrototypeOf = setprototypeof;

    index.js第一行引入
    import 'polyfill.js';
