import { IQuickPickSettings } from './quickPick';

type ISettingVariable = string | IQuickPickSettings[];

type ISettingVariables = {
  [key: string]: ISettingVariable;
};
