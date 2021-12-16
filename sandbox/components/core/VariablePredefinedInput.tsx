import React, { FC, useContext } from 'react';
import { Store } from '../../utils/store';
import { PREDEFINED_PREFIX } from '../../utils/variables';
import SelectString from './SelectString';

interface IProps {
  name: string;
}

type TVariable = string | undefined;

const VariablePredefinedInput: FC<IProps> = (props) => {
  const { name } = props;

  const { variables, setVariable } = useContext(Store);
  const value = variables[name] as TVariable;

  // update from bottom
  const handleChange = (newValue: TVariable) => {
    setVariable(name, newValue);
  };

  return (
    <>
      <SelectString
        value={value}
        mergeItems={PREDEFINED_PREFIX}
        onChange={handleChange}
      />
    </>
  );
};

export default VariablePredefinedInput;
