const inc = require('semver/functions/inc');
const commander = require('commander');
const fs = require('fs');
var clc = require('cli-color');

const FILE_NAME = './package.test.json';

const program = new commander.Command();
program.addOption(
  new commander.Option('-t, --type <semver>', 'increment type')
    .choices(['major', 'minor', 'patch'])
    .default('patch', '"patch"')
);

const run = () => {
  program.parse();
  const options = program.opts();
  const oldPackage = JSON.parse(fs.readFileSync(FILE_NAME, 'utf-8'));

  const newVersionNumber = inc(oldPackage.version, options.type);
  const changedValue = {
    version: newVersionNumber,
    scripts: {
      ...oldPackage.scripts,
      'extension:install': `code --install-extension vscode-git-commit-${newVersionNumber}.vsix`,
      'extension:rm': `rm -f ./vscode-git-commit-${oldPackage.version}.vsix`,
    },
  };
  const newPackage = JSON.stringify(
    { ...oldPackage, ...changedValue },
    null,
    '  '
  );
  fs.writeFileSync(FILE_NAME, newPackage);

  console.log(
    `Moved ${clc.bold.greenBright(FILE_NAME)} version from ${clc.red(
      oldPackage.version
    )} to ${clc.green(changedValue.version)}`
  );
};

run();
