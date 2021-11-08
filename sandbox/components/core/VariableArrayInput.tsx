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

  const [values, setValues] = useState<Omit<IVariable, 'key'>[]>([]);

  const handleInputChange = (
    newLabel: string,
    newDetail: string,
    index: number
  ) => {
    setValues((oldValue) => {
      const temp = oldValue;
      temp[index] = {
        label: newLabel,
        detail: newDetail.length > 0 ? newDetail : undefined,
      };
      onChange(temp);
      return temp;
    });
  };

  const handleAdd = () => {
    setValues((oldValues) => {
      const temp = [
        ...oldValues,
        {
          label: '',
        },
      ];
      onChange(temp);
      return temp;
    });
  };

  const handleDelete = (index: number) => {
    setValues((oldValue) => {
      const temp = oldValue.filter((_, i) => i !== index);
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
            onChange={(label, detail) => handleInputChange(label, detail, i)}
            key={i}
            onDelete={() => handleDelete(i)}
          />
        );
      })}
      <Button onClick={handleAdd} size="sm" className={styles.addButton}>
        Add
      </Button>
    </>
  );
};

export default VariableArrayInput;
