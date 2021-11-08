import React, { FC, useEffect, useState } from 'react';
import SelectString from './SelectString';

interface IProps {
  mergeItems: string[];
  onChange: (mergedItems: string[]) => void;
}

const VariableMergeInput: FC<IProps> = (props) => {
  const { mergeItems, onChange } = props;

  const [values, setValues] = useState<(string | undefined)[]>([]);

  // update from bottom
  const handleChange = (index: number, value: string | undefined) => {
    setValues((oldValue) => {
      const temp = oldValue;
      temp[index] = value;
      // @ts-ignore
      onChange(temp.filter((a) => !!a));
      return temp.filter((a) => !!a);
    });
  };

  // Update from top
  useEffect(() => {
    values.map((v, i) => {
      if (!mergeItems.includes(v!)) {
        handleChange(i, undefined);
      }
    });
  }, [mergeItems]);

  return (
    <>
      {values.map((v, i) => (
        <SelectString
          value={values[i]}
          mergeItems={mergeItems}
          onChange={(value) => handleChange(i, value)}
          key={i}
        />
      ))}
      <SelectString
        value={values[values.length + 1]}
        mergeItems={mergeItems}
        onChange={(value) => handleChange(values.length, value)}
        key={values.length + 1}
      />
    </>
  );
};

export default VariableMergeInput;
