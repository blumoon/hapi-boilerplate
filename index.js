/* eslint no-console: "off", no-process-exit: "off" */
'use strict';

(async () => {

    const config = require('./config');
    const server = require('./lib/server');

    if (config.env &&
        config.env.toLowerCase() !== 'production') {
        console.log(config);
    }

    const instance = await server(config);

    try {
        await instance.start();
        console.log(`Started v${ config.ver } ${ config.env } ENV at ${ instance.info.uri }`);
    }
    catch (err) {

        console.error(err);
        process.exit(1);
    }
})();

process.on('unhandledRejection', (r, p) => {

    console.log('Unhandled Rejection at:', p, 'reason:', r);
});
