import React, { FC, useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/store';
import SelectString from './SelectString';

interface IProps {
  mergeItems: string[];
  name: string;
}

type TVariable = (string | undefined)[];

const VariableMergeInput: FC<IProps> = (props) => {
  const { mergeItems, name } = props;

  const { variables, setVariable } = useContext(Store);
  const value = (variables[name] ?? []) as TVariable;

  // update from bottom
  const handleChange = (index: number, newValue: string | undefined) => {
    const newVal = [...value];
    newVal[index] = newValue;

    setVariable(name, newVal.filter((v) => !!v) as string[]);
  };

  useEffect(() => {
    value.map((v, i) => {
      if (!mergeItems.includes(v!)) {
        handleChange(i, undefined);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mergeItems]);

  return (
    <>
      {value.map((v, i) => (
        <SelectString
          value={value[i]}
          mergeItems={mergeItems}
          onChange={(value) => handleChange(i, value)}
          key={i}
        />
      ))}
      <SelectString
        value={value[value.length + 1]}
        mergeItems={mergeItems}
        onChange={(value) => handleChange(value?.length ?? 1, value)}
        key={value.length + 1}
      />
    </>
  );
};

export default VariableMergeInput;
