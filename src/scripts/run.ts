import { Repository } from '../typings/git';
import { IQuickPickSettings } from '../typings/quickPick';
import { useQuickPick, useQuickText } from '../utils/actions';
import { setGitMessage } from '../utils/git';
import {
  getDefaultVariablesValues,
  getTemplate,
  getVariableDisplayTitles,
  getVariables,
} from '../utils/settings';
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

  const variablesDisplayTitles = getVariableDisplayTitles();

  for (let i = 0; i < variables.length; i++) {
    const v = variables[i];

    const title = variablesDisplayTitles[v];

    const variablesSettings = getVariables();
    const variableValue = variablesSettings[v];
    let result = {
      key: v,
      value: '',
    };
    if (!variableValue) {
      const defaultValuesSettings = getDefaultVariablesValues();
      const defaultValue: string | undefined = defaultValuesSettings[v];

      result.value = await useQuickText({
        title,
        prompt: !!defaultValue
          ? `The default value is: "${defaultValue}"`
          : undefined,
        value: defaultValue ?? '',
        ignoreFocusOut: true,
        placeHolder: `Please type the value for <${v}>`,
      });
    } else {
      const choices: IQuickPickSettings[] = parseVariable(repo, v);
      result.value = await useQuickPick(
        {
          title,
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
