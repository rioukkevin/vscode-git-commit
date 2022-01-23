import { Change, Repository, Status } from '../typings/git';
import { IQuickPickSettings } from '../typings/quickPick';

const getQuickPickItemFromPath =
  (repo: Repository) =>
  (path: string): IQuickPickSettings => {
    const repoPath = repo.rootUri.path;
    const shortedPath = path.replace('file://', '').replace(repoPath, '');
    return {
      label: shortedPath,
      detail: '',
    };
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
    return result.map(getQuickPickItemFromPath(repo)) ?? [];
  };

export const getStagedFiles =
  (status?: Status) =>
  (repo: Repository): IQuickPickSettings[] => {
    const result = repo.state.indexChanges.map(getPathFiltered(status));
    return result.map(getQuickPickItemFromPath(repo)) ?? [];
  };

export const getUnstagedFiles =
  (status?: Status) =>
  (repo: Repository): IQuickPickSettings[] => {
    const result = repo.state.workingTreeChanges.map(getPathFiltered(status));
    return result.map(getQuickPickItemFromPath(repo)) ?? [];
  };
