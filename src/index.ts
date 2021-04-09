import * as vscode from 'vscode';
import './config/commitType';
import { getRepo } from './utils/git';
import { execute } from './scripts/run';
import { Repository } from './typings/git';
import { migrate } from './utils/migrate';

export function activate(context: vscode.ExtensionContext) {
  // GIT

  // Init
  console.log(
    'Congratulations, your extension "rioukkevin.vscode-git-commit" is now active!'
  );

  // MIGRATION
  migrate();

  // CMD register
  const disposable = vscode.commands.registerCommand(
    'vscodeGitCommit.setMessage',
    (params) => {
      vscode.commands.executeCommand('workbench.view.scm');
      const repoUri =
        params?._quickDiffProvider?.repository?.repositoryRoot || undefined;
      let repo: Repository = getRepo(repoUri);
      setTimeout(async () => {
        execute(repo);
      }, 200);
    }
  );
  setTimeout(() => {
    context.subscriptions.push(disposable);
  }, 1000);
}
