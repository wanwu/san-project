# San CLI 项目模板

---

## 安装

```bash
# 没有安装 hulk 需要安装
npm i -g @baidu/san-cli --registry http://registry.npm.baidu-int.com
san init ksky521/san-project my-project-folder
```

**PS: san-cli node 版本需要>=8.9**

## meta.js 是模板创建 prompt 交互问题

回答的内容会作为模板数据来处理文件


## 相关 dot 文件

模板中的`_xxx`文件会在安装之后，转换成`.xxx`文件，例如`template/_babelrc`经过`hulk init`之后，会变成`.babelrc`。

-   ezcoderc：同步开发机配置，yaml 格式，**未来支持**
-   babelrc：babel 配置
-   editorconfig：不需要修改，设置了 tab 4 个空格等，常见规范类的配置
-   npmrc：不需要修改，注册@baidu registry
-   prettierrc：不需要修改，格式化插件
-   gitignore：git 忽略
-   fecsrc：fecs 格式化配置

## 更多说明

访问项目[README](./src/README.md)
