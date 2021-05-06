import { IQuickPickItem } from '../typings/quickPick';
import {
  QUICKPICKITEMSALPHA8,
  QUICKPICKITEMSANGULAR,
  QUICKPICKITEMSKEKE,
  QUICKPICKITEMSSEMANTIC,
  QUICKPICKITEMSUNDEFINED,
} from './constants';

export const presetAggregation: { [key: string]: IQuickPickItem[] } = {
  angular: QUICKPICKITEMSANGULAR,
  semantic: QUICKPICKITEMSSEMANTIC,
  alpha8: QUICKPICKITEMSALPHA8,
  keke: QUICKPICKITEMSKEKE,
};

export const getLocalPreset = (name: string): Array<IQuickPickItem> => {
  if (Object.keys(presetAggregation).includes(name)) {
    return presetAggregation[name];
  } else {
    return QUICKPICKITEMSUNDEFINED;
  }
};
