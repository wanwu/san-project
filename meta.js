module.exports = {
    complete(data, {chalk, logger}) {
        console.log(
            logger.boxen(
                `        San CLI

Start with ${chalk.bold('yarn/npm start')}`,
                {padding: 1, borderStyle: 'round'}
            )
        );
    },
    helpers: {
        /* eslint-disable fecs-camelcase */
        if_or: (v1, v2, options) => {
            /* eslint-enable fecs-camelcase */
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    filters: {
        'mock/**': 'tplEngine!=="smarty"',
        'template/**': 'tplEngine!=="smarty"',
        'template/demo-store/**': '!demo || (demo && demoType!=="store")',
        'template/demo/**': '!demo || (demo && demoType!=="normal")',
        'src/pages/demo-store/**': '!demo || (demo && demoType!=="store")',
        'src/pages/demo/**': '!demo || (demo && demoType!=="normal")'
    },
    prompts: {
        name: {
            type: 'string',
            required: true,
            label: '项目名称',
            default: '{{name}}'
        },
        description: {
            type: 'string',
            required: true,
            label: '项目描述',
            default: 'A San project'
        },
        author: {
            type: 'string',
            label: '作者',
            default: '{{author}}'
        },
        tplEngine: {
            type: 'list',
            message: '选择模板引擎',
            choices: [
                {
                    name: 'Smarty（百度内部）',
                    value: 'smarty',
                    short: 'Smarty'
                },
                {
                    name: '纯 HTML',
                    value: 'html',
                    short: 'HTML'
                }
            ]
        },
        demo: {
            type: 'confirm',
            message: '安装demo示例？'
        },
        demoType: {
            when: 'demo',
            type: 'list',
            message: '选择示例代码类型：',
            choices: [
                {
                    name: 'san-store (推荐)',
                    value: 'store',
                    short: 'san-store'
                },
                {
                    name: 'normal',
                    value: 'normal',
                    short: 'normal'
                }
            ]
        },
        cssPreprocessor: {
            type: 'list',
            message: '选择 CSS 预处理器',
            choices: [
                {
                    name: 'less（推荐）',
                    value: 'less',
                    short: 'Less'
                },
                {
                    name: 'Sass',
                    value: 'sass',
                    short: 'Sass'
                },
                {
                    name: 'stylus',
                    value: 'stylus',
                    short: 'Stylus'
                }
            ]
        }
    }
};
