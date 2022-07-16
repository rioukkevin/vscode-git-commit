import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton, Select } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import styles from '../../styles/SelectString.module.css';

interface IProps {
  value: string | undefined;
  mergeItems: string[];
  onChange: (mergedItem: string | undefined) => void;
}

const SelectString: FC<IProps> = (props) => {
  const { mergeItems, onChange, value } = props;

  const [selected, setSelected] = useState('');

  const handleChange = (e: any) => {
    setSelected(e.target.value);
    onChange(e.target.value === '' ? undefined : e.target.value);
  };

  const handleDelete = () => {
    onChange(undefined);
  };

  useEffect(() => {
    setSelected(value ?? '');
  }, [value]);

  return (
    <div className={styles.container}>
      <Select
        size="sm"
        value={selected}
        onChange={handleChange}
        variant="filled"
        className={styles.select}
      >
        <option value={''} key={0}></option>
        {mergeItems.map((m) => (
          <option value={m} key={m}>
            {m.toUpperCase()}
          </option>
        ))}
      </Select>
      <IconButton
        className={styles.deleteIcon}
        aria-label="copy"
        disabled={selected === ''}
        icon={<DeleteIcon />}
        color="#000000"
        backgroundColor="#EEF2F6"
        _hover={{ backgroundColor: '#db4437', color: '#FBFFFF' }}
        size="sm"
        onClick={handleDelete}
      />
    </div>
  );
};

export default SelectString;
