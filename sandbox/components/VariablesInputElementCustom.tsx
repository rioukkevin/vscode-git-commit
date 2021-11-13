import React, { FC, useState } from 'react';
import styles from '../styles/VariableInput.module.css';
import { Select } from '@chakra-ui/select';
import VariableArrayInput from './core/VariableArrayInput';
import { IVar } from './core/VariableInput';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import VariableMergeInput from './core/VariableMergeInput';

interface IProps {
  name: string;
  onChange: (name: string, newValue?: IVar[] | string[]) => void;
  onDelete: () => void;
  mergeItems: string[];
}

const VariableInputElementCustom: FC<IProps> = (props) => {
  const { name, onChange, onDelete, mergeItems } = props;

  const [type, setType] = useState<'array' | 'merge'>('array');

  const mergeItemsWithoutSelf = mergeItems.filter((a) => a !== name);

  // Update from bottom
  const handleChangeType = (e: any) => {
    const newVal = e.target.value as 'array' | 'merge';
    setType(newVal);
    onChange(name, []);
  };

  const handleChangeData = (name: string, content: IVar[] | string[]) => {
    onChange(name, content);
  };

  return (
    <>
      <h3 className={styles.name} key={name}>
        {name}
      </h3>
      <div className={styles.content}>
        <div className={`${styles.contentLeft} ${styles.contentLeftRow}`}>
          <Select
            size="sm"
            value={type}
            onChange={handleChangeType}
            variant="filled"
          >
            <option value="array">Array</option>
            <option value="merge">Merge</option>
          </Select>
          <IconButton
            className={styles.deleteIcon}
            aria-label="copy"
            icon={<DeleteIcon />}
            color="#000000"
            backgroundColor="#EEF2F6"
            _hover={{ backgroundColor: '#db4437', color: '#FBFFFF' }}
            size="sm"
            onClick={onDelete}
            style={{ marginLeft: '5px' }}
          />
        </div>
        <div className={styles.contentRight}>
          {type === 'array' && (
            <VariableArrayInput
              onChange={(variable) => handleChangeData(name, variable)}
            />
          )}
          {type === 'merge' && (
            <VariableMergeInput
              mergeItems={mergeItemsWithoutSelf}
              onChange={(variable) => handleChangeData(name, variable)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VariableInputElementCustom;
