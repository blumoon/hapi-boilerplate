/* eslint no-console: "off", no-process-env: "off" */
'use strict';

module.exports = Object.assign({
    ver: require('./package.json').version,
    env: process.env.NODE_ENV,
    port: process.env.PORT || 8080,
    isSecure: process.env.IS_SECURE || false,
    pathPrefix: process.env.PATH_PREFIX || '/',
    filesRelativeTo: process.env.FILES_RELATIVETO
}, (() => {

    try {

        return require('./config.json');
    }
    catch (ex) {

        console.log('Dev config not loaded.');
    }
})());
