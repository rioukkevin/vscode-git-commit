import React, { FC, useEffect, useState } from 'react';
import { PREDEFINED_PREFIX } from '../VariablesInput.utils';
import SelectString from './SelectString';

interface IProps {
  onChange: (newValue: string | undefined) => void;
}

const VariablePredefinedInput: FC<IProps> = (props) => {
  const { onChange } = props;

  const [value, setValue] = useState<string | undefined>('');

  // update from bottom
  const handleChange = (newValue: string | undefined) => {
    setValue(newValue);
    onChange(newValue);
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
