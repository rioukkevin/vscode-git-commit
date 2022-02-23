const fs = require('fs');

const INPUT_FILE = './README.md';
const OUTPUT_FILE = './sandbox/generated/doc.md.ts';

const run = () => {
  const contentToCopy = fs.readFileSync(INPUT_FILE);

  const template = `
export const doc = \`${contentToCopy.toString().replaceAll('`', '\\`')}\`
`;

  fs.writeFileSync(OUTPUT_FILE, template);
};

run();
