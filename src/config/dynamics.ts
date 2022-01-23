import { Repository, Status } from '../typings/git';
import { IQuickPickSettings } from '../typings/quickPick';
import { getFiles, getStagedFiles, getUnstagedFiles } from '../utils/files';
import { QUICKPICKITEMSUNDEFINED } from './constants';

export const dynamicsAggregation: {
  [key: string]: (repo: Repository) => IQuickPickSettings[];
} = {
  files: getFiles(),
  'files.deleted': getFiles(Status.DELETED),
  'files.modified': getFiles(Status.MODIFIED),
  'files.added': getFiles(Status.INTENT_TO_ADD),
  'files.staged': getStagedFiles(),
  'files.staged.deleted': getStagedFiles(Status.DELETED),
  'files.staged.modified': getStagedFiles(Status.MODIFIED),
  'files.staged.added': getStagedFiles(Status.INTENT_TO_ADD),
  'files.changed': getUnstagedFiles(),
  'files.changed.deleted': getUnstagedFiles(Status.DELETED),
  'files.changed.modified': getUnstagedFiles(Status.MODIFIED),
  'files.changed.added': getUnstagedFiles(Status.INTENT_TO_ADD),
};

export const getDynamicPreset = (
  repo: Repository,
  name: string
): Array<IQuickPickSettings> => {
  if (Object.keys(dynamicsAggregation).includes(name)) {
    return dynamicsAggregation[name](repo);
  } else {
    return QUICKPICKITEMSUNDEFINED;
  }
};
