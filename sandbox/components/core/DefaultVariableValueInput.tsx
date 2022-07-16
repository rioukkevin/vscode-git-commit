import { IconButton, Input } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import styles from '../../styles/DefaultVariablesValuesInput.module.css';
import { DeleteIcon } from '@chakra-ui/icons';
import { IStoreDefaultVariableValue } from '../../typings/Store';

interface IProps {
  name: string;
  value: IStoreDefaultVariableValue;
  isDisabled?: boolean;
  onChange: (value: IStoreDefaultVariableValue) => IStoreDefaultVariableValue;
  onDelete: () => void;
}

const DefaultVariableValueInput: FC<IProps> = (props) => {
  const { name, value, onChange, onDelete, isDisabled } = props;

  const [internalValue, setInternalValue] =
    useState<IStoreDefaultVariableValue>(value);

  const handleChangeValue = (e: any) => {
    const newValue = e.target.value.length === 0 ? undefined : e.target.value;
    onChange(newValue);
    setInternalValue(newValue);
  };

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <>
      <h3 className={styles.name} key={name}>
        {name}{' '}
        {isDisabled && (
          <span className={styles.disabled}>
            Not handle because a variable config is defined for
          </span>
        )}
      </h3>
      <div className={styles.container}>
        <div className={styles.input}>
          <Input
            size="sm"
            placeholder="default value..."
            value={internalValue ?? ''}
            onChange={handleChangeValue}
            className={styles.label}
            variant="filled"
          />
        </div>
        <IconButton
          disabled={!internalValue}
          className={styles.deleteIcon}
          aria-label="copy"
          icon={<DeleteIcon />}
          color="#000000"
          backgroundColor="#EEF2F6"
          _hover={{ backgroundColor: '#db4437', color: '#FBFFFF' }}
          size="sm"
          onClick={onDelete}
        />
      </div>
    </>
  );
};

export default DefaultVariableValueInput;
