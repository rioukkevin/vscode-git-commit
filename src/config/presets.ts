import { IQuickPickItem } from '../typings/quickPick';
import {
  QUICKPICKITEMSALPHA8,
  QUICKPICKITEMSANGULAR,
  QUICKPICKITEMSKEKE,
  QUICKPICKITEMSSEMANTIC,
  QUICKPICKITEMSUNDEFINED,
} from './constants';

export const getLocalPreset = (name: string): Array<IQuickPickItem> => {
  if (name === 'angular') {
    return QUICKPICKITEMSANGULAR;
  }
  if (name === 'semantic') {
    return QUICKPICKITEMSSEMANTIC;
  }
  if (name === 'alpha8') {
    return QUICKPICKITEMSALPHA8;
  }
  if (name === 'keke') {
    return QUICKPICKITEMSKEKE;
  } else {
    return QUICKPICKITEMSUNDEFINED;
  }
};
