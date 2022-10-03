import { Change, Repository, Status } from '../typings/git';
import { IQuickPickSettings } from '../typings/quickPick';
import { setLengtToX } from './strings';

const MAX_LENGTH = 100;

const getQuickPickItemFromPath =
  (repo: Repository) =>
  (path: string): IQuickPickSettings => {
    const repoPath = repo.rootUri.path;
    const shortedPath = path.replace('file://', '').replace(repoPath, '');
    const splittedPath = shortedPath.split('/');
    const fileName = splittedPath[splittedPath.length - 1];
    return {
      label: fileName,
      detail: setLengtToX(MAX_LENGTH)(shortedPath),
    };
  };

const getEmptyQuickPick = () => {
  return [
    {
      label: '',
      detail: 'No files corresponding to this input, press Enter to continue',
    },
  ];
};

const getPathFiltered = (status?: Status) => (c: Change) => {
  if (status) {
    return c.status === status ? c.originalUri.toString() : '';
  }
  return c.originalUri.toString();
};

export const getFiles =
  (status?: Status) =>
  (repo: Repository): IQuickPickSettings[] => {
    const result = [
      ...repo.state.indexChanges,
      ...repo.state.workingTreeChanges,
    ].map(getPathFiltered(status));
    if (result.length === 0) {
      return getEmptyQuickPick();
    }
    return result.map(getQuickPickItemFromPath(repo)) ?? [];
  };

export const getStagedFiles =
  (status?: Status) =>
  (repo: Repository): IQuickPickSettings[] => {
    const result = repo.state.indexChanges.map(getPathFiltered(status));
    if (result.length === 0) {
      return getEmptyQuickPick();
    }
    return result.map(getQuickPickItemFromPath(repo)) ?? [];
  };

export const getUnstagedFiles =
  (status?: Status) =>
  (repo: Repository): IQuickPickSettings[] => {
    const result = repo.state.workingTreeChanges.map(getPathFiltered(status));
    if (result.length === 0) {
      return getEmptyQuickPick();
    }
    return result.map(getQuickPickItemFromPath(repo)) ?? [];
  };
