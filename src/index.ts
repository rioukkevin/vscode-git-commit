import * as vscode from 'vscode';
import './config/commitType';
import {
  commitTypesSelector,
  CommitTypeOptions,
  CommitType,
} from './config/commitType';
import {
  getQuickTextOptions,
  useQuickPick,
  useQuickText,
} from './utils/actions';
import { getAliases, getPreset } from './utils/settings';
import { getRepo, setGitMessage } from './utils/git';
import { execute } from './scripts/workflow';

export function activate(context: vscode.ExtensionContext) {
  // GIT

  // Init
  console.log(
    'Congratulations, your extension "rioukkevin.vscode-git-commit" is now active!'
  );

  // CMD register
  const disposable = vscode.commands.registerCommand(
    'vscodeGitCommit.setMessage',
    (params) => {
      vscode.commands.executeCommand('workbench.view.scm');
      const repoUri = params?._quickDiffProvider?.repository?.repositoryRoot || undefined;
      let repo: any = getRepo(repoUri);
      setTimeout(async () => {
        execute(repo);
      }, 200);
    }
  );

  context.subscriptions.push(disposable);
}
