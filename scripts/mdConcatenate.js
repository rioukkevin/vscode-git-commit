const fs = require('fs');

const CONCATENATE_FILE = [
  './BASE.md',
  './SETTINGS.md',
  './CONTRIBUTING.md',
  './CHANGELOG.md',
];

const OUTPUT_FILE = './README.md';

const run = () => {
  const contentToConcatenate = CONCATENATE_FILE.map((f) => {
    return fs.readFileSync(f);
  }).reduce((a, b) => a + '\n' + b);

  fs.writeFileSync(OUTPUT_FILE, contentToConcatenate);
};

run();
