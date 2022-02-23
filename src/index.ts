import { commands, window, ExtensionContext } from 'vscode';
import { getRepo } from './utils/git';
import { execute } from './scripts/run';
import { Repository } from './typings/git';
import { migrate } from './utils/migrate';
import { isUpToDate } from './utils/storage';

export function activate(context: ExtensionContext) {
  // Init
  console.log(
    'Congratulations, your extension "rioukkevin.vscode-git-commit" is now active!'
  );

  // MIGRATION
  migrate();

  // CMD register
  const disposable = commands.registerCommand(
    'vscodeGitCommit.setMessage',
    (params) => {
      commands.executeCommand('workbench.view.scm');
      const repoUri =
        params?._quickDiffProvider?.repository?.repositoryRoot || undefined;
      let repo: Repository | false = getRepo(repoUri);
      if (!!repo) {
        setTimeout(async () => {
          await execute(repo as Repository);
          commands.executeCommand('workbench.scm.focus');
        }, 200);
      }
    }
  );
  setTimeout(() => {
    context.subscriptions.push(disposable);

    isUpToDate(context, window);
  }, 1000);
}
