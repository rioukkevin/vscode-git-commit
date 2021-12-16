import { IconButton, Input } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import styles from '../../styles/StringInput.module.css';
import { DeleteIcon } from '@chakra-ui/icons';
import { IStoreVariable, IStoreVariableCustom } from '../../typings/Store';

interface IProps {
  value: IStoreVariable;
  onChange: (label: string, detail: string) => void;
  onDelete: () => void;
}

const VariableInput: FC<IProps> = (props) => {
  const { value, onChange, onDelete } = props;

  const [label, setLabel] = useState<string>(value.label);
  const [detail, setDetail] = useState<string>(value.detail ?? '');

  const handleChangeLabel = (e: any) => {
    onChange(e.target.value, detail);
    setLabel(e.target.value);
  };

  const handleChangeDetail = (e: any) => {
    onChange(label, e.target.value);
    setDetail(e.target.value);
  };

  useEffect(() => {
    setLabel(value.label);
    setDetail(value.detail ?? '');
  }, [value]);

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input
          size="sm"
          placeholder="nom..."
          value={label}
          onChange={handleChangeLabel}
          className={styles.label}
          variant="filled"
        />
        <Input
          size="sm"
          placeholder="description..."
          value={detail}
          onChange={handleChangeDetail}
          variant="filled"
        />
      </div>
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
  );
};

export default VariableInput;
