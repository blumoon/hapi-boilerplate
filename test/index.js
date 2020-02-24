'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Config = require('../config');
const Server = require('../lib/server');

const expect = Code.expect;
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;

describe('server', () => {

    it('runs', async () => {

        await expect(Server(Config)).to.not.reject();
    });

    it('healthy', async () => {

        const instance = await Server(Config);
        const res = await instance.inject('/');

        expect(res.statusCode).to.equal(200);
    });
});
