import * as vscode from 'vscode';
import { InputBoxOptions, QuickPickOptions } from 'vscode';

interface IValues {
  label: string;
  key: string | number;
  detail: string;
}

export const useQuickPick = async (
  params: vscode.QuickPickOptions,
  values: IValues[]
): Promise<string> => {
  const value = await vscode.window.showQuickPick(values, params);
  if (!value) {throw new Error('Empty');}
  return value.label;
};

export const useQuickText = async (
  params: InputBoxOptions
): Promise<string> => {
  const message = await vscode.window.showInputBox(params);
  if (!message) {throw new Error('Empty');}
  return message;
};

export const getQuickPickOptions = (
  placeholder: string = 'Now, you\'re able to choose a prefix for your commit 😉'
): QuickPickOptions => {
  return {
    matchOnDescription: true,
    matchOnDetail: true,
    ignoreFocusOut: true,
    placeHolder: placeholder,
  };
};

export const getQuickTextOptions = (
  placeholder: string = 'Just do it ! 😎'
): InputBoxOptions => {
  return {
    placeHolder: placeholder,
    ignoreFocusOut: true,
    prompt: '',
    value: '',
  };
};
