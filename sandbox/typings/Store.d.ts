import { Descendant } from 'slate';

export interface IStoreVariable {
  label: string;
  detail?: string;
}

export type IStoreVariableCustom = IStoreVariable[];
export type IStoreVariableMerge = string[];
export type IStoreVariablePredefined = string;
export type IStoreDefaultVariableValue = string | undefined;

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

export type IStoreTemplate = Descendant[];

export interface IStoreData {
  template: IStoreTemplate;
  variables: IStoreVariables;
  defaultVariablesValues: IStoreDefaultVariablesValues;
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
  setInsertionMode: (value: boolean) => boolean;
}
