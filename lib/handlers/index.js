'use strict';

module.exports = {
    handler: (req, h) => {

        // use server.app for stuff
        return h.response(`${ req.server.methods.getPackageName() } v${ req.server.app.config.ver }`);
    }
};
