'use strict';

module.exports = [
    { path: '/', method: 'get', config: require('./handlers/index') },
    { path: '/foo', method: 'get', config: require('./handlers/foo') }
];
