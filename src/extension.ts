// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
var activatedState = false;

export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "testextension" is now active!');

	let disposable = vscode.commands.registerCommand('aura-extension-pack.syncSettings', () => {

		vscode.workspace.getConfiguration().update("editor.formatOnSave", true);
		vscode.workspace.getConfiguration().update("editor.formatOnPaste", true);
		vscode.workspace.getConfiguration().update("editor.codeActionsOnSave", {
			"source.organizeImports": true
		});

	});

	context.subscriptions.push(disposable);
}


// this method is called when your extension is deactivated
export function deactivate() { }