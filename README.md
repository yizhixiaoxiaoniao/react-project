#描述
react脚手架工程，用于快速构建单页面web应用

#目录结构
build:         webpack配置文件
dist:          打包文件目录
node_modules:  npm依赖库
src:           react源码文件夹
.babelrc:      antd配置文件
.eslintrc:     eslint语法校验配置文件
.eslitignore:  eslit语法校验工具ignore
.gitignore:    git忽略模块
.package.json: 项目描述文件
proxyrc.js:    webpack-dev-server proxy代理配置文件
webserver.js： 后台运行文件
yarn.lock:     yarn配置文件

#启动步骤
1.npm install -g yarn && yarn install  安装npm依赖
2.npm start         启动webpack-dev-server打包编译服务
3.node webserver.js 启动本地后台服务，提供Mock数据
