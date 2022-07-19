import React, { FC, useContext } from 'react';
import { LineElement } from '../typings/Editor';
import { IStoreDefaultVariableValue } from '../typings/Store';
import { Store } from '../utils/store';
import { parseVariableFromTemplate } from '../utils/template';
import VariableDisplayTitleInput from './core/VariableDisplayTitleInput';

interface IProps {}

const VariablesDisplayTitlesInput: FC<IProps> = (props) => {
  const { variablesDisplayTitles, setVariableDisplayTitle, template } =
    useContext(Store);

  const templateVariables =
    parseVariableFromTemplate(template as LineElement[]) ?? [];

  const availableVariables = [...templateVariables];

  return (
    <div style={{ width: '100%' }}>
      {availableVariables.map((av, i) => (
        <VariableDisplayTitleInput
          key={i}
          name={av}
          value={variablesDisplayTitles[av]}
          onChange={(value: IStoreDefaultVariableValue) =>
            setVariableDisplayTitle(av, value)
          }
          onDelete={() => setVariableDisplayTitle(av, undefined)}
        />
      ))}
    </div>
  );
};

export default VariablesDisplayTitlesInput;
