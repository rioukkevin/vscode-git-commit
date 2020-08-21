import * as vscode from 'vscode';
import { GitExtension } from './types/git';
import {commitTypes, CommitTypeOptions} from './config/commitType';
import {messageInputType} from './config/message';

export function activate(context: vscode.ExtensionContext) {
	// GIT
	function getGitExtension() {
		const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
		const gitExtension = vscodeGit && vscodeGit.exports;
		return gitExtension;
	}

	const gitExtension = getGitExtension();
	if (!gitExtension?.enabled) {
		vscode.window.showErrorMessage('Git extensions are not currently enabled, please try again after enabled!');
		return false;
	}
	let repo: any = gitExtension.getAPI(1).repositories[0];

	function setGitMessage(msg: string): void{
		repo.inputBox.value = msg;
	}

	// Init
	console.log('Congratulations, your extension "rioukkevin.gitprefix" is now active!');

	// CMD register
	const disposable = vscode.commands.registerCommand('extension.setPrefix', () => {
		vscode.commands.executeCommand('workbench.view.scm');
		vscode.window.showQuickPick(commitTypes, CommitTypeOptions).then((selected): void => {
			if(selected){
				vscode.window.showInputBox(messageInputType).then((value): void => {
					const message = value || ' ';
					setGitMessage(selected.label + ': ' + message);
				});
			}else{
				// DO nothing here
			}
			// TODO call text message
		});
	});

	context.subscriptions.push(disposable);
}