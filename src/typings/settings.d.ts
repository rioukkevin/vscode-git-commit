import { IQuickPickItem } from './quickPick';

type ISettingVariable =
  | string
  | Pick<IQuickPickItem, 'key' | 'label'>[]
  | Pick<IQuickPickItem, 'key' | 'label' | 'detail'>[];

type ISettingVariables = {
  [key: string]: ISettingVariable;
};
