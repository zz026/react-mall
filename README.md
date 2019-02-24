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