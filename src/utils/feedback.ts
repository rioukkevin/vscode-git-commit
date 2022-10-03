import { window } from 'vscode';

export const konsole = {
  info: (message: string) => window.showInformationMessage(message),
  error: (message: string) => window.showErrorMessage(message),
};
