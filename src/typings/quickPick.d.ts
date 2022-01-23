import { QuickPickItem } from 'vscode';

export interface IQuickPickSettings
  extends Omit<QuickPickItem, 'key' | 'detail'> {
  detail?: string;
}
