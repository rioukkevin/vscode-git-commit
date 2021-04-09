import { QuickPickItem } from 'vscode';

export interface IQuickPickItem extends QuickPickItem {
  label: string;
  key: string | number;
  detail: string;
}
