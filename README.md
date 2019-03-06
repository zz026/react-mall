##0 项目生成
  npm install -g create-react-app
  create-react-app 项目名
  npm eject 暴露wepack配置
  重新 npm i 依赖 （暴露后需安装新依赖）

##1. 按需引入antd
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

##2. 引入less less-loader （less需2.7.3版本）
  /config/webpack.config.js
  1) const cssRegex = /\.(css|less)$/;
  2) getStyleLoaders中loaders = 末尾加 
    {
      loader: require.resolve('less-loader')
    }

##3.更改全局变量
  app.less中引入 @import '~antd/dist/antd.less';
  覆盖less变量 @primary-color

##4.修改端口号
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


## 6.引入fetch
  npm i whatwg-fetch --save
  utils中封装fetch请求

  