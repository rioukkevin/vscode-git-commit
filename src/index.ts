import * as vscode from 'vscode';
import { GitExtension } from './types/git';
import './config/commitType';
import {commitTypesSelector, CommitTypeOptions, CommitType} from './config/commitType';
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
	console.log('Congratulations, your extension "rioukkevin.vscode-git-commit" is now active!');

	// CMD register
	const disposable = vscode.commands.registerCommand('extension.setPrefix', () => {
		// vscodeGitCommit.customAlias
		let aliases: Object[] | undefined = vscode.workspace.getConfiguration('vscodeGitCommit').get('customAlias');
		let SettingsEntry: Array<CommitType> = [];
		if(aliases){
			debugger;
			for (let i = 0; i < aliases.length; i++) {
				const el: any = aliases[i];
				SettingsEntry.push({
					label: el.name,
					key: Math.floor(Math.random() * 10000000) + '',
					detail: el.description
				});
			}
		}
		let selectedPrefix: string | undefined = vscode.workspace.getConfiguration('vscodeGitCommit').get('predefinedPrefix');
		if(selectedPrefix && selectedPrefix !== 'none'){
			const commitTypes = commitTypesSelector(selectedPrefix);
			for (let i = 0; i < commitTypes.length; i++) {
				const el = commitTypes[i];
				SettingsEntry.push(el);
			}
		}

		debugger;

		vscode.commands.executeCommand('workbench.view.scm');
		vscode.window.showQuickPick(SettingsEntry, CommitTypeOptions).then((selected): void => {
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