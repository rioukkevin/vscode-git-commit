import { window, extensions } from 'vscode';
import { GitExtension, Repository } from '../typings/git';
import { getMode } from './settings';

function getGitExtension() {
  const vscodeGit = extensions.getExtension<GitExtension>('vscode.git');
  const gitExtension = vscodeGit && vscodeGit.exports;
  return gitExtension;
}

export const getRepo = (repoUri: string): Repository | false => {
  const gitExtension = getGitExtension();
  if (!gitExtension?.enabled) {
    window.showErrorMessage(
      'Git extensions are not currently enabled, please try again after enabled!'
    );
    return false;
  }
  let repos: Repository[] = gitExtension.getAPI(1).repositories;
  const repo = repos.find(
    (e) => e._repository.repository.repositoryRoot === repoUri
  );
  return repo || repos[0];
};

export const setGitMessage = (repo: Repository, msg: string): void => {
  let mode: string | undefined = getMode();
  if (mode && mode === 'Concatenate') {
    repo.inputBox.value += repo.inputBox.value.length > 1 ? '\n' + msg : msg;
  } else {
    repo.inputBox.value = msg;
  }
};
