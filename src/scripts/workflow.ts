import {
  getQuickPickOptions,
  getQuickTextOptions,
  useQuickPick,
  useQuickText,
} from "../utils/actions";
import { CommitType, commitTypesSelector } from "../config/commitType";
import { setGitMessage } from "../utils/git";

import { getAliases, getMode, getPreset, getTemplate } from "../utils/settings";
import {
  templateParser,
  templateSerialize,
  TVariable,
} from "../utils/template";

export const execute = async (repo: any) => {
  // Init
  const settingsTemplate = getTemplate();
  const settingsAliases = getAliases();
  const settingsPreset = getPreset();

  // Data from params
  let prefixEntries: Array<CommitType> = settingsAliases;
  if (settingsPreset && settingsPreset !== "none") {
    const commitTypes = commitTypesSelector(settingsPreset);
    for (let i = 0; i < commitTypes.length; i++) {
      const el = commitTypes[i];
      prefixEntries.push(el);
    }
  }

  const variables = templateParser(settingsTemplate || "{prefix}: {message}");

  // Workflow messages
  let keys: TVariable[] = [];

  let value = await useQuickPick(getQuickPickOptions(), prefixEntries);
  keys.push({
    key: "prefix",
    value: value,
  });

  for (let i = 1; i < variables.length; i++) {
    const key = variables[i];
    value = await useQuickText(getQuickTextOptions(`Please enter a '${key}'`));
    keys.push({
      key: key,
      value: value,
    });
  }

  setGitMessage(
    repo,
    templateSerialize(settingsTemplate || "{prefix}: {message}", keys)
  );
};
