import { Descendant } from 'slate';

export interface IStoreVariable {
  label: string;
  detail?: string;
}

export type IStoreVariableCustom = IStoreVariable[];
export type IStoreVariableMerge = string[];
export type IStoreVariablePredefined = string;
export type IStoreDefaultVariableValue = string | undefined;
export type IStoreVariableDisplayTitle = string | undefined;

type IStoreVariableValue =
  | IStoreVariableCustom
  | IStoreVariableMerge
  | IStoreVariablePredefined
  | undefined;

export interface IStoreVariables {
  [key: string]: IStoreVariableValue;
}

export interface IStoreDefaultVariablesValues {
  [key: string]: IStoreDefaultVariableValue;
}

export interface IStoreVariablesDisplayTitles {
  [key: string]: IStoreVariableDisplayTitle;
}

export type IStoreTemplate = Descendant[];

export interface IStoreData {
  template: IStoreTemplate;
  variables: IStoreVariables;
  defaultVariablesValues: IStoreDefaultVariablesValues;
  variablesDisplayTitles: IStoreVariablesDisplayTitles;
  insertionMode: boolean;
}

export interface IStore extends IStoreData {
  setVariable: (
    name: string,
    value: IStoreVariableValue
  ) => IStoreVariableValue;
  setTemplate: (value: IStoreTemplate) => IStoreTemplate;
  setDefaultVariableValue: (
    name: string,
    value: IStoreDefaultVariableValue
  ) => IStoreDefaultVariableValue;
  setVariableDisplayTitle: (
    name: string,
    value: IStoreVariableDisplayTitle
  ) => IStoreVariableDisplayTitle;
  setInsertionMode: (value: boolean) => boolean;
}
