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
  let repo: any = getRepo();

  // Init
  console.log(
    'Congratulations, your extension "rioukkevin.vscode-git-commit" is now active!'
  );

  // CMD register
  const disposable = vscode.commands.registerCommand(
    'extension.setPrefix',
    () => {
      vscode.commands.executeCommand('workbench.view.scm');

      setTimeout(async () => {
        execute(repo);
      }, 200);
    }
  );

  context.subscriptions.push(disposable);
}
