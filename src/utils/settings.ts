import { workspace } from 'vscode';
import { EXTENSION_NAME } from '../config/const';
import {
  ISettingDefaultVariablesValues,
  ISettingVariables,
} from '../typings/settings';

export const getMode = (): string | undefined => {
  const mode: string | undefined = workspace
    .getConfiguration(EXTENSION_NAME)
    .get('insertMode');
  return mode;
};

export const getTemplate = (): string | undefined => {
  const template: string[] | undefined = workspace
    .getConfiguration(EXTENSION_NAME)
    .get('template');
  return template?.join('\n');
};

export const getVariables = (): ISettingVariables => {
  let variables: ISettingVariables | undefined = workspace
    .getConfiguration(EXTENSION_NAME)
    .get('variables');
  return variables as ISettingVariables;
};

export const getDefaultVariablesValues = (): ISettingDefaultVariablesValues => {
  let variables: ISettingVariables | undefined = workspace
    .getConfiguration(EXTENSION_NAME)
    .get('defaultVariablesValues');
  return variables as ISettingDefaultVariablesValues;
};
