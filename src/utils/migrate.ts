import { workspace } from 'vscode';
import { EXTENSION_NAME } from '../config/const';
import { getVariables } from './settings';

// const prefixNameAggregation: { [key: string]: any } = {
//   'Creator Prefix': 'keke',
//   Angular: 'angular',
//   'Semantic Commit Messages': 'semantic',
//   Alpha8: 'alpha8',
//   none: 'none',
// };

export const migrate = () => {
  // V2 to V2.1
  const oldVariables = getVariables();
  if (
    oldVariables.aliases &&
    !(oldVariables.prefix as string).includes('...')
  ) {
    const newVariables = {
      ...oldVariables,
      prefix: `aliases...${oldVariables.prefix}`,
    };
    workspace
      .getConfiguration(EXTENSION_NAME)
      .update('variables', newVariables, true);
    console.log('MIGRATION TEMPLATE V2 -> V2.1');
  }
};
