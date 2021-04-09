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
  if (!value) {
    throw new Error('Empty');
  }
  return value.label;
};

export const useQuickText = async (
  params: InputBoxOptions
): Promise<string> => {
  const message = await vscode.window.showInputBox(params);
  if (!message) {
    throw new Error('Empty');
  }
  return message;
};
