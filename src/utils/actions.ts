import { window } from 'vscode';
import { InputBoxOptions, QuickPickOptions } from 'vscode';
import { IQuickPickSettings } from '../typings/quickPick';
import { konsole } from './feedback';

export const useQuickPick = async (
  params: QuickPickOptions,
  values: IQuickPickSettings[]
): Promise<string> => {
  const value = await window.showQuickPick(values, params);
  if (!value) {
    konsole.error('Message is cancel');
    throw new Error('Empty');
  }
  return value.label;
};

export const useQuickText = async (
  params: InputBoxOptions
): Promise<string> => {
  const message = await window.showInputBox(params);
  if (message === undefined) {
    konsole.error('Message is cancel');
    throw new Error('Canceled');
  }
  return message;
};
