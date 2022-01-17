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
        /* eslint-disable */
        if_or(v1, v2, options) {
            /* eslint-enable */
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    filters: {
        '_eslintrc.js': '!lint',
        'mock/**': 'tplEngine!=="smarty"',
        'template/**': 'tplEngine!=="smarty"',
        'template/demo-store/**': '!demo || (demo && demoType!=="store")',
        'template/demo/**': '!demo || (demo && demoType!=="normal")',
        'src/pages/index/**/*.less': 'cssPreprocessor!=="less"',
        'src/pages/index/**/*.scss': 'cssPreprocessor!=="sass"',
        'src/pages/index/**/*.styl': 'cssPreprocessor!=="stylus"',
        'src/pages/demo-store/**': '!demo || (demo && demoType!=="store")',
        'src/pages/demo/**': '!demo || (demo && demoType!=="normal")',
        'src/lib/Store.js': '!demo || (demo && demoType!=="store")'
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
                    title: 'Smarty（百度内部）',    // 兼容 prompts
                    name: 'Smarty（百度内部）',
                    value: 'smarty',
                    short: 'Smarty'
                },
                {
                    title: '纯 HTML',   // 兼容 prompts
                    name: '纯 HTML',
                    value: 'html',
                    short: 'HTML'
                }
            ]
        },
        lint: {
            type: 'confirm',
            message: '是否安装 ESLint？'
        },
        lintConfig: {
            when: 'lint',
            type: 'list',
            message: '选择 ESLint 配置',
            choices: [
                {
                    title: '@ecomfe/eslint-config (https://github.com/ecomfe/eslint-config)',   // 兼容 prompts
                    name: '@ecomfe/eslint-config (https://github.com/ecomfe/eslint-config)',
                    value: 'ecomfe',
                    short: 'ecomfe'
                },
                {
                    title: 'Standard (https://github.com/standard/standard)',   // 兼容 prompts
                    name: 'Standard (https://github.com/standard/standard)',
                    value: 'standard',
                    short: 'Standard'
                },
                {
                    title: 'Airbnb (https://github.com/airbnb/javascript)', // 兼容 prompts
                    name: 'Airbnb (https://github.com/airbnb/javascript)',
                    value: 'airbnb',
                    short: 'Airbnb'
                }
            ]
        },
        lintHook: {
            when: 'lint',
            type: 'confirm',
            message: '是否安装ESLint的 lint-staged？'
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
                    title: 'san-store (推荐)',  // 兼容 prompts
                    name: 'san-store (推荐)',
                    value: 'store',
                    short: 'san-store'
                },
                {
                    title: 'normal',    // 兼容 prompts
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
                    title: 'Less（推荐）',  // 兼容 prompts
                    name: 'Less（推荐）',
                    value: 'less',
                    short: 'Less'
                },
                {
                    title: 'Sass',  // 兼容 prompts
                    name: 'Sass',
                    value: 'sass',
                    short: 'Sass'
                },
                {
                    title: 'Stylus',    // 兼容 prompts
                    name: 'Stylus',
                    value: 'stylus',
                    short: 'Stylus'
                }
            ]
        }
    }
};
