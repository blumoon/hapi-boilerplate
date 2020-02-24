'use strict';

module.exports = {
    handler: (req, h) => {

        const server = req.server;

        // server log sample
        server.log(['test'], 'Log test');

        return h.response(`Hello ${ server.methods.getPackageNameReverse() }!`);
    }
};
