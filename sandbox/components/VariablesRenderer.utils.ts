import { IVariablesContent } from './VariablesInput';

export const serializer = (variables: IVariablesContent) => {
  return JSON.stringify(variables, null, 2);
};
