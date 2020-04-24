/**
 * @file san config
 * @author {{author}}
 *
 * 环境变量, scripts/preview.js脚本中定义
 * COM_PAGE: 组件类型默认情况下, 组件路径是src/components; 值为src/pages中有效目录时, 路径为src/pages/$COM_PAGE/components
 * COM_NAME: 组件名称, 默认avatar
 */
// 静态文件域名
const CDN = 'https://s.bdstatic.com/';
// 生产环境下的静态目录
const STATIC_PRO = 'static/{{name}}';
// 生产环境下模板目录

const path = require('path');
const resolve = pathname => path.resolve(__dirname, pathname);
// 这个是 release 目录，打包机器只能支持 output，所以谨慎修改
const outputDir = 'output';
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
    {
        id:'middleware1',
        apply(api){
            api.middleware(()=> require('hulk-mock-server')({
                    contentBase: path.join(__dirname, './' + outputDir + '/'),
                    rootDir: path.join(__dirname, './mock'),
                    processors: [`smarty?router=/template/*&baseDir=${path.join(__dirname, `./${outputDir}/template`)}&dataDir=${path.join(__dirname, './mock/_data_')}`] // eslint-disable-line
                }))
        }
}]

module.exports = {
    assetsDir:isProduction?STATIC_PRO:'static',
    publicPath: isProduction?CDN:'/',
    outputDir,
    filenameHashing:isProduction,
    {{#if_eq tplEngine "smarty"}}
    copy: {
        from: 'template',
        to: 'template'
    },
    {{/if_eq}}
    // 这是多页面配置
    pages: {
        {{#if_eq tplEngine "smarty"}}
            {{#if_eq demoType "store"}}
            demoStore: {
                entry: './src/pages/demo-store/index.js',
                template: './template/demo-store/index.tpl',
                filename: 'demo-store/index.tpl'
            },
            {{/if_eq}}
            {{#if_eq demoType "normal"}}
            demo: {
                entry: './src/pages/demo/index.js',
                template: './template/demo/index.tpl',
                filename: 'demo/index.tpl'
            },
            {{/if_eq}}
            index: {
                entry: './src/pages/index/index.js',
                template: './template/index/index.tpl',
                filename: 'index/index.tpl'
            }
        {{/if_eq}}
        {{#if_eq tplEngine "html"}}
            {{#if_eq demoType "store"}}
            demoStore: {
                entry: './src/pages/demo-store/index.js',
                template: './pages.template.ejs',
                filename: 'demo-store/index.html'
            },
            {{/if_eq}}
            {{#if_eq demoType "normal"}}
            demo: {
                entry: './src/pages/demo/index.js',
                template: './pages.template.ejs',
                filename: 'demo/index.html'
            },
            {{/if_eq}}
            index: {
                entry: './src/pages/index/index.js',
                template: './pages.template.ejs',
                filename: 'index.html'
            }
        {{/if_eq}}
    },
    // transpileDependencies:['@baidu/nano'],
    css: {
        sourceMap: isProduction,
        cssPreprocessor: '{{cssPreprocessor}}'
    },
    splitChunks: {
        cacheGroups:{
                vendors: {
                name: 'vendors',
                test: /[\\/]node_modules(?!\/@baidu)[\\/]/,
                // minChunks: 1,
                priority: -10
            },
            common: {
                name: 'common',
                test: /([\/]src\/components(-open)?|[\\/]node_modules\/@baidu\/nano)/,
                priority: -20,
                minChunks: 1,
                chunks: 'initial'
            }
        }
    },
    {{#if_eq tplEngine "smarty"}}
    plugins: [
        {id:'middleware1',
        apply(api) {
            api.middleware(()=> require('hulk-mock-server')({
                            contentBase: path.join(__dirname, './' + outputDir + '/'),
                            rootDir: path.join(__dirname, './mock'),
                            processors: [`smarty?router=/template/*&baseDir=${path.join(__dirname, `./${outputDir}/template`)}&dataDir=${path.join(__dirname, './mock/_data_')}`] // eslint-disable-line
                        }))
        }}
    ],
    {{/if_eq}}
    alias:{
        '@assets':resolve('src/assets'),
        '@components':resolve('src/components'),
        '@app': resolve('src/lib/App.js'),
        '@store': resolve('src/lib/Store.js')
    },
    chainWebpack: config => {
        // 这里可以用来扩展 webpack 的配置，使用的是 webpack-chain 语法

        // config.module.rule('img')
        //     .test(/\.(png|jpe?g|gif)(\?.*)?$/)
        //     .use('url-loader').loader(require.resolve('url-loader'))
        //     .options({
        //         limit: 1000,
        //         name: STATIC_PRO + '/img/[name].[hash:7].[ext]',
        //         publicPath: isProduction ? CDN : ''
        //     });
    },
    sourceMap: isProduction
};
