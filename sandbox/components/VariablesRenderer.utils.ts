import { IVariablesContent } from './VariablesInput';

export const serializer = (variables: IVariablesContent) => {
  const toDisplay: { [key: string]: any } = {};
  Object.keys(variables).map((key) => {
    if (
      variables &&
      variables[key] &&
      variables[key]![0] &&
      typeof variables[key]![0] === 'string'
    ) {
      toDisplay[key] = variables[key]?.join('...');
    }
  });
  return JSON.stringify({ ...variables, ...toDisplay }, null, 2);
};
