import * as vscode from 'vscode';
import { CommitType } from '../config/commitType';

export const getPreset = (): string | undefined => {
  let selectedPrefix: string | undefined = vscode.workspace
    .getConfiguration('vscodeGitCommit')
    .get('predefinedPrefix');
  return selectedPrefix;
};

export const getMode = (): string | undefined => {
  const mode: string | undefined = vscode.workspace
    .getConfiguration('vscodeGitCommit')
    .get('insertMode');
  return mode;
};

export const getTemplate = (): string | undefined => {
  const template: string[] | undefined = vscode.workspace
    .getConfiguration('vscodeGitCommit')
    .get('messageTemplate');
  return template?.join('\n');
};

export const getAliases = (): CommitType[] => {
  let aliases: Object[] | undefined = vscode.workspace
    .getConfiguration('vscodeGitCommit')
    .get('customAlias');
  let SettingsEntry: Array<CommitType> = [];
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
