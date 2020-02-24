'use strict';

module.exports = async (config) => {

    const server = require('@hapi/hapi').server({
        port: config.port,
        routes: {
            security: config.isSecure,
            files: { relativeTo: config.filesRelativeTo },
            cache: { otherwise: 'no-cache, no-store, must-revalidate, pre-check=0, post-check=0' }
        },
        router: {
            stripTrailingSlash: false
        }
    });

    await server.register(require('./plugins')(config));
    server.bind({ server });
    server.method(require('./methods'));
    server.route(require('./routes'));
    server.app.config = config;

    return server;
};
