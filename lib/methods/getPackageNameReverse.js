'use strict';

module.exports = function () {

    // works through server.bind; must be called before server.method
    const methods = this.server.methods;

    return methods.getPackageName().split('').reverse().join('');
};
