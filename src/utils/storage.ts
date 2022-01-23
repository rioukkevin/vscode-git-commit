import { ExtensionContext } from 'vscode';
import { EXTENSION_NAME } from '../config/const';

// TODO not working when reloading window, needs work
export const getHasBeenInitialized = (context: ExtensionContext): boolean => {
  return (
    context.globalState.get<boolean>(`${EXTENSION_NAME}.hasBeenInitialized`) ??
    false
  );
};

export const setHasBeenInitialized = (
  context: ExtensionContext,
  value: boolean
) => {
  context.globalState.update(`${EXTENSION_NAME}.hasBeenInitialized`, value);
};
