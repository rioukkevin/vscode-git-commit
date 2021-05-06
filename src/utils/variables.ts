import { getLocalPreset, presetAggregation } from '../config/presets';
import { IQuickPickItem } from '../typings/quickPick';
import { getVariables } from './settings';

const SPREAD_OPERATOR = '...';

export const parseVariable = (name: string): IQuickPickItem[] => {
  const variables = getVariables();
  const variable = variables[name];

  if (Object.keys(presetAggregation).includes(name)) {
    const localPreset = getLocalPreset(name as string);
    return localPreset as IQuickPickItem[];
  } else if (typeof variable === 'string') {
    const presetList = variable.split(SPREAD_OPERATOR);
    let resolvedQuickPickItem: IQuickPickItem[] = [];
    for (let i = 0; i < presetList.length; i++) {
      const p = presetList[i];
      if (p === name) {
        return [];
      } else {
        const newParsedVariable = parseVariable(p);
        resolvedQuickPickItem = [
          ...resolvedQuickPickItem,
          ...newParsedVariable,
        ];
      }
    }
    return resolvedQuickPickItem;
  } else if (typeof variable !== 'string') {
    return variable as IQuickPickItem[];
  } else {
    return [];
  }
};
