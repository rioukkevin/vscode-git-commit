import { window } from 'vscode';

export const konsole = {
  info: (message: string) =>
    window.showInformationMessage(message, 'toto', 'lolo'),
  error: (message: string) => window.showErrorMessage(message),
};
