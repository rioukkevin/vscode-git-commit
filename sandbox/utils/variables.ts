import { IStoreVariables } from '../typings/Store';

export const PREDEFINED_PREFIX: string[] = [
  'keke',
  'semantic',
  'angular',
  'alpha8',
];

export const variableSerializer = (variables: IStoreVariables) => {
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
