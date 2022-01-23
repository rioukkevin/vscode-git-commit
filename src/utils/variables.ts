import { dynamicsAggregation, getDynamicPreset } from '../config/dynamics';
import { getLocalPreset, presetAggregation } from '../config/presets';
import { Repository } from '../typings/git';
import { IQuickPickSettings } from '../typings/quickPick';
import { getVariables } from './settings';

const SPREAD_OPERATOR = '...';

export const parseVariable = (
  repo: Repository,
  name: string
): IQuickPickSettings[] => {
  const variables = getVariables();
  const variable = variables[name];

  if (Object.keys(presetAggregation).includes(name)) {
    const localPreset = getLocalPreset(name as string);
    return localPreset;
  } else if (Object.keys(dynamicsAggregation).includes(name)) {
    const dynamicPreset = getDynamicPreset(repo, name);
    return dynamicPreset;
  } else if (typeof variable === 'string') {
    const presetList = variable.split(SPREAD_OPERATOR);
    let resolvedQuickPickItem: IQuickPickSettings[] = [];
    for (let i = 0; i < presetList.length; i++) {
      const p = presetList[i];
      if (p === name) {
        return [];
      } else {
        const newParsedVariable = parseVariable(repo, p);
        resolvedQuickPickItem = [
          ...resolvedQuickPickItem,
          ...newParsedVariable,
        ];
      }
    }
    return resolvedQuickPickItem;
  } else if (typeof variable !== 'string') {
    return variable as IQuickPickSettings[];
  } else {
    return [];
  }
};
