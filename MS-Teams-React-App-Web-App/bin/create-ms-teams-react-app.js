#! /usr/bin/env node

'use strict';

let appName = process.argv[2];
appName = appName.length > 1 ? "create-ms-teams-react-app" : appName;
const { spawnSync } = require('child_process');
const url = 'https://github.com/arcortez/ms-teams-react-app';

spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);

console.log('Your app has been successfully installed');
console.log(`$ cd ${appName}`);
console.log('$ npm start');