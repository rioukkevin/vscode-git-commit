import { Repository } from '../typings/git';
import { IQuickPickSettings } from '../typings/quickPick';
import { useQuickPick, useQuickText } from '../utils/actions';
import { setGitMessage } from '../utils/git';
import { getTemplate, getVariables } from '../utils/settings';
import {
  templateParser,
  templateSerialize,
  TVariable,
} from '../utils/template';
import { parseVariable } from '../utils/variables';

export const execute = async (repo: Repository) => {
  const template = getTemplate();

  const variables = templateParser(template || '{prefix}: {message}');

  const variablesReplacement: TVariable[] = [];

  for (let i = 0; i < variables.length; i++) {
    const v = variables[i];
    const variablesSettings = getVariables();
    const variableValue = variablesSettings[v];
    let result = {
      key: v,
      value: '',
    };
    if (!variableValue) {
      result.value = await useQuickText({
        ignoreFocusOut: true,
        placeHolder: `Please type the value for <${v}>`,
      });
    } else {
      const choices: IQuickPickSettings[] = parseVariable(repo, v);
      result.value = await useQuickPick(
        {
          ignoreFocusOut: true,
          placeHolder: `Please select a value for <${v}>`,
        },
        choices.map((c) => ({
          ...c,
          detail: c.detail ?? '',
        }))
      );
    }
    variablesReplacement.push(result);
  }

  if (variablesReplacement.length >= variables.length) {
    setGitMessage(
      repo,
      templateSerialize(template || '{prefix}: {message}', variablesReplacement)
    );
  }
};
