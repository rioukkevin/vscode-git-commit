import * as vscode from 'vscode';
import { EXTENSION_NAME } from '../config/const';
import {
  getAliases,
  getOldTemplate,
  getPreset,
  getVariables,
} from './settings';

const prefixNameAggregation: { [key: string]: any } = {
  'Creator Prefix': 'keke',
  Angular: 'angular',
  'Semantic Commit Messages': 'semantic',
  Alpha8: 'alpha8',
  none: 'none',
};

export const migrate = () => {
  // V1 to V2
  const oldAliases = getAliases();
  const usedPrefix = getPreset();
  const oldTemplate = getOldTemplate();
  if (oldAliases.length > 0 && usedPrefix) {
    const newVariables: Object = {
      prefix: usedPrefix?.includes('none')
        ? oldAliases
        : prefixNameAggregation[usedPrefix ?? 'unknown'],
      aliases: oldAliases,
    };
    let success = vscode.workspace
      .getConfiguration(EXTENSION_NAME)
      .update('variables', newVariables, true);
    vscode.workspace
      .getConfiguration(EXTENSION_NAME)
      .update('customAlias', undefined, true);
    vscode.workspace
      .getConfiguration(EXTENSION_NAME)
      .update('predefinedPrefix', undefined, true);
    console.log('MIGRATION VARIABLES');
  }
  if (oldTemplate && !oldTemplate.includes('{prefix}: {message}')) {
    let success = vscode.workspace
      .getConfiguration(EXTENSION_NAME)
      .update('template', oldTemplate.split('\n'), true);
    vscode.workspace
      .getConfiguration(EXTENSION_NAME)
      .update('messageTemplate', undefined, true);
    console.log('MIGRATION TEMPLATE V1 -> V2');
  }

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
    vscode.workspace
      .getConfiguration(EXTENSION_NAME)
      .update('variables', newVariables, true);
    console.log('MIGRATION TEMPLATE V2 -> V2.1');
  }
};
