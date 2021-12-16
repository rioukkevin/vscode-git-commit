import { Descendant } from 'slate';

export interface IStoreVariable {
  label: string;
  detail?: string;
}

export type IStoreVariableCustom = IStoreVariable[];
export type IStoreVariableMerge = string[];
export type IStoreVariablePredefined = string;

type IStoreVariableValue =
  | IStoreVariableCustom
  | IStoreVariableMerge
  | IStoreVariablePredefined
  | undefined;

export interface IStoreVariables {
  [key: string]: IStoreVariableValue;
}

export type IStoreTemplate = Descendant[];

export interface IStoreData {
  template: IStoreTemplate;
  variables: IStoreVariables;
}

export interface IStore extends IStoreData {
  setVariable: (
    name: string,
    value: IStoreVariableValue
  ) => IStoreVariableValue;
  setTemplate: (value: IStoreTemplate) => IStoreTemplate;
}
