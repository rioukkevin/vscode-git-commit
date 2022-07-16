import React, { FC, useContext } from 'react';
import { LineElement } from '../typings/Editor';
import { IStoreDefaultVariableValue } from '../typings/Store';
import { Store } from '../utils/store';
import { parseVariableFromTemplate } from '../utils/template';
import DefaultVariableValueInput from './core/DefaultVariableValueInput';

interface IProps {}

const DefaultVariablesValuesInput: FC<IProps> = (props) => {
  const {
    defaultVariablesValues,
    setDefaultVariableValue,
    template,
    variables,
  } = useContext(Store);

  const templateVariables =
    parseVariableFromTemplate(template as LineElement[]) ?? [];

  const availableVariables = [...templateVariables];

  const disabledVariables = Object.keys(variables);

  return (
    <div style={{ width: '100%' }}>
      {availableVariables.map((av, i) => (
        <DefaultVariableValueInput
          key={i}
          name={av}
          value={defaultVariablesValues[av]}
          isDisabled={disabledVariables.includes(av)}
          onChange={(value: IStoreDefaultVariableValue) =>
            setDefaultVariableValue(av, value)
          }
          onDelete={() => setDefaultVariableValue(av, undefined)}
        />
      ))}
    </div>
  );
};

export default DefaultVariablesValuesInput;
