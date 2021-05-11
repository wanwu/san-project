/**
 * @file mock server 配置
 * 详细见：https://github.com/jaywcjlove/webpack-api-mocker
 * 支持 mockjs：http://mockjs.com/examples.html
 * import mockjs from 'mockjs'
 */
const proxy = {
    // Priority processing.
    // apiMocker(app, path, option)
    // This is the option parameter setting for apiMocker
    // webpack-api-mocker@1.5.15 support
    '_proxy': {
        proxy: {
            '/repos/*': 'https://api.github.com/',
            '/:owner/:repo/raw/:ref/*': 'http://127.0.0.1:2018'
        },
        changeHost: true
    },
    // =====================
    'GET /api/user': {
        id: 1,
        username: '呜哈呜哈',
        sex: 6
    },
    'POST /api/publish': (req, res) => {
        res.json({
            errno: 0,
            data: {
                username: req.body.username,
                content: req.body.content
            }
        });
    },
    'GET /api/getData': {
        errno: 0,
        data: {
            user: {
                id: 1,
                username: '哼哼哈嘿',
                sex: 6
            },
            comments: [{
                username: '伊森',
                content: '很好很好，hello world'
            }]
        }
    }
};
module.exports = proxy;
