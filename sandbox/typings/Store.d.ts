import { Descendant } from 'slate';

interface IStoreVariable {
  label: string;
  detail?: string;
}

type IStoreVariableCustom = IStoreVariable[];
type IStoreVariableMerge = string[];
type IStoreVariablePredefined = string;

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
