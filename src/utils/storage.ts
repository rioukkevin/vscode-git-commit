import { ExtensionContext } from 'vscode';
import { EXTENSION_NAME } from '../config/const';
import { gt, valid } from 'semver';

const KEY = 'version';

// TODO not working when reloading window, needs work

export const isUpToDate = (context: ExtensionContext, window: any) => {
  const currentVersion = context.extension.packageJSON.version;
  const storedVersion =
    context.globalState.get<string>(`${EXTENSION_NAME}.${KEY}`) ?? '0.0.0';

  if (valid(storedVersion) && valid(currentVersion)) {
    if (gt(currentVersion, storedVersion)) {
      window.showInformationMessage(
        `VSCode Git Commit message is up to date 😎! (version: v${currentVersion})`
      );
      context.globalState.update(`${EXTENSION_NAME}.${KEY}`, currentVersion);
    }
  }
};
