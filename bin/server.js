#!/usr/bin/env node

const program = require('commander');
const server = require('../');
const version = require('../package.json').version;

program.version(version);

server.start({port: 80});

