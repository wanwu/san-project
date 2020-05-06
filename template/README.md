
# {{ name }}

> 这是一个 San 的多页面脚手架产生的项目，适合多页面项目，支持 Smarty 和静态 HTML 做 layout 框架。
> PS：webapp 是分为框架页面和接口的，**layout 框架** 指 webapp 的承接框架的 HTML 页面，比如 Smarty 输出框架

## Build Setup

``` bash
# install dependencies
npm install
# or
yarn


# serve with hot reload at localhost:9003
npm start
# or
yarn start

# build for production with minification
npm run build
# or
yarn build
```
更多命令查看`package.json`的`scripts`字段。

### 编译相关配置和说明


## 约定大于配置

* 统一端能力：为了方便适配手百版本和端能力 Mock，项目对端能力进行统一管理，统一放在`natives`
* 统一接口请求：方便 node？可以在`webpack.resolve`中修改成对应的 node ral 版本，可以 mock。但是降低内聚性
* 统一管理业务逻辑：方便 Node 逻辑调用？但是降低内聚性

## 最佳实践&解决方案
> [本地实现 Mock Server](https://www.npmjs.com/package/hulk-mock-server) 两种

### Mock Server
Mock Server 实现涉及到代码和说明
```
├── mock    mock 文件
│   ├── _data_  这里是JSON 数据，跟template 目录结构一致，支持 Mockjs 语法（**.mock.json）
│   └── index.js 配置文件
├── scripts
│   ├── dev.js
```

`dev.js`中会启动`webpackDevServer`和`hotReload`功能，DevServer会将请求转发到 MockServer，MockServer （代码`middlewares/mocker.js`）包含两部分：`nodeServer`和`smartyServer`，node 遵循[`webpack-api-mocker`](https://github.com/jaywcjlove/webpack-api-mocker/)文档，`smartyServer`是 node 执行`php`命令行渲染 smarty 模板，然后将 stdout 作为输出。


{{#if_eq tplEngine "smarty"}}
smarty支持的配置有：`baseDir=./template&bin=php&dataDir=mockDir/_mockdata_`

* baseDir：template 路径，会传递给 smarty->setTempalteDir
* bin：php bin 的路径，默认会使用 node 的 which 查找 php
* dataDir：模板数据来源目录，默认是 rootDir 的 `_data_`目录
{{/if_eq}}



### 模板引擎
{{#if_eq tplEngine "html"}}
如果不使用 smarty，直接 html，则使用`pages.template.ejs`生成对应的页面 html，放到`output/_html`中，本地开发通过`localhost:port/_html`访问
{{/if_eq}}

{{#if_eq tplEngine "smarty"}}
 使用 Smarty 模板，则通过`template`文件夹下面的 tpl 进行渲染，全部继承`base.tpl`模板，本地开发通过`localhost:port/template`访问
{{/if_eq}}

### vw & rem 切图
原理详见：https://aotu.io/notes/2017/04/28/2017-4-28-CSS-viewport-units/index.html

项目实现通过 postcss+pr2rem 插件，默认使用的是宽度为`1242px`的设计稿为基准（在`postcss.config.js`中修改，统一使用html font-size=`5vw`）。

css 书写不再使用`bsass`的`rem(*)`的方式，而是使用`pr`：

```css
// input
// pr 是真实设计稿测量出来的宽度
h2 {
    margin: 1242pr 1242pr 40px 50px;
    font-size: 32px;
}

// output
h2 {
    margin: 20rem 20rem 40px 50px;
    font-size: 32px;
}
```
## 目录说明
```
├── config
│   └── index.js
├── mock
├── scripts
│   ├── plugins
│   ├── build.js
│   ├── dev.js
│   └── utils.js
├── src
│   ├── services       # 公共service请求
│   ├── assets         # 公共资源
│   │   └── font
│   ├── components     # 公共UI组件
│   │   └── demo
│   ├── layouts      
│   ├── lib            # lib 库
│   │   ├── app.js
│   │   ├── fetch.js
│   │   └── utils
│   ├── natives        # 端能力统一在这里管理
│   ├── pages          # 页面相关，后面详细讲解
│   │   └── demo
├── template
│   ├── base.tpl
│   └── demo
│       └── index.tpl
├── node_modules
├── public
├── output
├── docs
├── README.md
├── build.sh
├── package.json
├── pages.template.ejs
├── postcss.config.js
└── san.config.js
```
#### pages
```
pages
└── demo                # demo 页面
    ├── assets          # demo 页面用到的资源
    ├── components      # demo 页面用到的 UI 组件
    │   ├── comment
    │   └── publisher
    ├── index.js        # demo 入口文件
    ├── index.scss
    └── services        # demo 用到的接口请求 services
        └── index.js
```

### 页面接口使用
使用 [fly.js](https://github.com/wendux/fly/)，在  `pages/xx/services` 文件夹下开发接口请求，例如：

```js
import fly from 'flyio';
export default {
    getData() {
        return fly.get('/api/getData');
    },
    publish(data) {
        return fly.post('/api/publish', data);
    }
}
```

**如果项目公共的 api 请求，请放在`src/services`下面统一维护**

### dotFile 配置

* ezcoderc：同步开发机配置，yaml 格式，**未来支持**
* babelrc：babel 配置
* editorconfig：不需要修改，设置了 tab 4个空格等，常见规范类的配置
* npmrc：不需要修改，注册@baidu registry
* prettierrc：不需要修改，格式化插件
* gitignore：git 忽略
* fecsrc：fecs 格式化配置




