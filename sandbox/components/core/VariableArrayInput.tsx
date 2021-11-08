import React, { FC, useState } from 'react';
import VariableInput, { IVar } from './VariableInput';
import styles from '../../styles/StringArrayInput.module.css';
import { Button } from '@chakra-ui/button';
import { IVariable } from '../../typings/Data';

interface IProps {
  onChange: (values: IVar[]) => void;
}

const VariableArrayInput: FC<IProps> = (props) => {
  const { onChange } = props;

  const [values, setValues] = useState<Omit<IVariable, 'key'>[]>([
    {
      label: '',
      detail: '',
    },
  ]);

  const handleInputChange = (newLabel: string, index: number) => {
    setValues((oldValue) => {
      const temp = oldValue;
      temp[index] = {
        label: newLabel,
      };
      console.log(temp);
      onChange(temp);
      return temp;
    });
  };

  return (
    <>
      {values.map((v, i) => {
        return (
          <VariableInput
            value={v}
            onChange={(label, detail) => handleInputChange(label, i)}
            key={i}
          />
        );
      })}
      <Button
        onClick={() =>
          setValues((oldValues) => [
            ...oldValues,
            {
              label: '',
            },
          ])
        }
        size="sm"
      >
        Add
      </Button>
    </>
  );
};

export default VariableArrayInput;
