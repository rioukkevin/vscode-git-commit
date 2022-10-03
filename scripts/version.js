const fs = require('fs');
var clc = require('cli-color');

const FILE_NAME = './package.json';

const run = () => {
  const package = JSON.parse(fs.readFileSync(FILE_NAME, 'utf-8'));

  console.log(`Version: ${clc.green(package.version)}`);
};

run();
