import { InputBoxOptions } from 'vscode';

export interface MessageInputType extends InputBoxOptions {}

export const messageInputType: MessageInputType = {
    placeHolder: 'Just do it ! 😎',
    ignoreFocusOut: true,
    prompt: '',
    value: ''
};
