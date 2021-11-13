import { IVariablesContent } from './VariablesInput';

export const serializer = (variables: IVariablesContent) => {
  const toDisplay: { [key: string]: any } = {};
  Object.keys(variables).map((key) => {
    if (
      variables &&
      variables[key] !== undefined &&
      variables[key]![0] &&
      Array.isArray(variables[key]) &&
      typeof variables[key]![0] === 'string'
    ) {
      const tot = variables[key] as string[];
      toDisplay[key] = tot.join('...');
    }
  });
  return JSON.stringify({ ...variables, ...toDisplay }, null, 2);
};
