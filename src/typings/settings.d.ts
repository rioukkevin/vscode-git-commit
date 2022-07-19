import { IQuickPickSettings } from './quickPick';

type ISettingVariable = string | IQuickPickSettings[];

type ISettingVariables = {
  [key: string]: ISettingVariable;
};

type ISettingDefaultVariablesValue = string;

type ISettingDefaultVariablesValues = {
  [key: string]: ISettingDefaultVariablesValue;
};

type ISettingVariablesDisplayTitle = string | undefined;

type ISettingVariablesDisplayTitles = {
  [key: string]: ISettingVariablesDisplayTitle;
};
