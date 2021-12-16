import React, { FC, useContext, useState } from 'react';
import VariableInput from './VariableInput';
import styles from '../../styles/StringArrayInput.module.css';
import { Button } from '@chakra-ui/button';
import { Store } from '../../utils/store';
import { IStoreVariableCustom } from '../../typings/Store';

interface IProps {
  name: string;
}

type TVariable = IStoreVariableCustom;

const VariableArrayInput: FC<IProps> = (props) => {
  const { name } = props;

  const { variables, setVariable } = useContext(Store);
  const value = variables[name] as TVariable;

  const handleInputChange = (
    newLabel: string,
    newDetail: string,
    index: number
  ) => {
    const temp = value;
    temp[index] = {
      label: newLabel,
      detail: newDetail.length > 0 ? newDetail : undefined,
    };
    setVariable(name, temp);
  };

  const handleAdd = () => {
    const temp = [
      ...value,
      {
        label: '',
      },
    ];
    setVariable(name, temp);
  };

  const handleDelete = (index: number) => {
    const temp = value.filter((_, i) => i !== index);
    setVariable(name, temp);
  };

  return (
    <>
      {value.map((v, i) => {
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
