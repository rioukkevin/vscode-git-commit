import React, { FC, useState } from 'react';
import styles from '../styles/VariableInput.module.css';
import { Select } from '@chakra-ui/select';
import VariableArrayInput from './core/VariableArrayInput';
import { IVar } from './core/VariableInput';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

interface IProps {
  name: string;
  onChange: (name: string, newValue?: IVar[]) => void;
  onDelete: () => void;
}

const VariableInputElementCustom: FC<IProps> = (props) => {
  const { name, onChange, onDelete } = props;

  return (
    <>
      <h3 className={styles.name} key={name}>
        {name}
      </h3>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <IconButton
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
        <div className={styles.contentRight}>
          <VariableArrayInput
            onChange={(variable) => onChange(name, variable)}
          />
        </div>
      </div>
    </>
  );
};

export default VariableInputElementCustom;
