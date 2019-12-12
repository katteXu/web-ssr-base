# ssr 基础项目 next
## 概述
- [x] 集成 `antdesign`样式 ; 
- [x] 启用  `less` `cssModules` ;
- [x] 集成 `koa2` 服务端 ;

## 基础next项目
```
yarn init
yarn add next react react-dom
// 创建pages文件夹
// 开发页面 index.js
```

## 配置babel
> 创建.babelrc  

> 添加引入插件  
yarn add bable-plugin-import  --dev

> 添加装饰器插件  
yarn add @babel/plugin-proposal-decorators --dev  
yarn add @babel/preset-env --dev  
yarn add babel-plugin-transform-class-properties --dev  

> 添加antd插件  
yarn add antd

## 配置样式
> with antd less 编译样式  
> with antd css  基础样式  
> with cssModules  模块化css  
> with antd custom less 自定义antd less 覆盖  
> 全局禁用闪动  _app.js 中配置

## 代码格式化
> "babel-eslint": "^10.0.3",  
"eslint": "^6.2.2",  
"eslint-config-prettier": "^6.3.0",  
"eslint-plugin-prettier": "^3.1.1",  
"eslint-plugin-react": "^7.14.3",  
"prettier": "^1.18.2"  

> 创建文件   
.prettierrc  
.eslintrc.json  
.eslintignore  
.editorconfig 

## 服务端 Koa 搭建
> 创建server文件夹

## Layout 布局
> component/Layout 文件

## next.config.js
> 1. 别名  
> 2. 代码分析
> 3. css模块化
> 4. 配置antd组件样式

