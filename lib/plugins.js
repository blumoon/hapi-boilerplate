'use strict';

module.exports = (config) => {

    return [{
        plugin: require('@hapi/crumb'),
        options: {
            restful: true,
            cookieOptions: {
                isSecure: config.isSecure
            }
        }
    }, {
        plugin: require('@hapi/good'),
        options: {
            reporters: {
                console: [{
                    name: 'Squeeze',
                    args: [{ log: '*', error: '*', response: '*' }],
                    module: '@hapi/good-squeeze'
                }, {
                    module: '@hapi/good-console'
                }, 'stdout']
            }
        }
    }];
};
