import * as vscode from 'vscode';
import { EXTENSION_NAME } from '../config/const';
import { IQuickPickItem } from '../typings/quickPick';
import { ISettingVariables } from '../typings/settings';

export const getMode = (): string | undefined => {
  const mode: string | undefined = vscode.workspace
    .getConfiguration(EXTENSION_NAME)
    .get('insertMode');
  return mode;
};

export const getTemplate = (): string | undefined => {
  const template: string[] | undefined = vscode.workspace
    .getConfiguration(EXTENSION_NAME)
    .get('template');
  console.log('TT', template);
  return template?.join('\n');
};

export const getVariables = (): ISettingVariables => {
  let variables:
    | ISettingVariables
    | undefined = vscode.workspace
    .getConfiguration(EXTENSION_NAME)
    .get('variables');
  return variables as ISettingVariables;
};

// DEPRECATED
export const getAliases = (): IQuickPickItem[] => {
  let aliases: Object[] | undefined = vscode.workspace
    .getConfiguration(EXTENSION_NAME)
    .get('customAlias');
  let SettingsEntry: Array<IQuickPickItem> = [];
  if (aliases) {
    for (let i = 0; i < aliases.length; i++) {
      const el: any = aliases[i];
      SettingsEntry.push({
        label: el.name,
        key: Math.floor(Math.random() * 10000000) + '',
        detail: el.description,
      });
    }
  }
  return SettingsEntry;
};

// DEPRECATED
export const getPreset = (): string | undefined => {
  let selectedPrefix: string | undefined = vscode.workspace
    .getConfiguration(EXTENSION_NAME)
    .get('predefinedPrefix');
  return selectedPrefix;
};

// DEPRECATED
export const getOldTemplate = (): string | undefined => {
  const template: string[] | undefined = vscode.workspace
    .getConfiguration(EXTENSION_NAME)
    .get('messageTemplate');
  return template?.join('\n');
};
