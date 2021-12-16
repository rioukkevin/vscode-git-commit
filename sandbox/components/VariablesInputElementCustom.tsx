import React, { FC, useContext, useState } from 'react';
import styles from '../styles/VariableInput.module.css';
import { Select } from '@chakra-ui/select';
import VariableArrayInput from './core/VariableArrayInput';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import VariableMergeInput from './core/VariableMergeInput';
import { Store } from '../utils/store';

interface IProps {
  name: string;
  mergeItems: string[];
}

const VariableInputElementCustom: FC<IProps> = (props) => {
  const { name, mergeItems } = props;

  const { variables, setVariable } = useContext(Store);

  const [type, setType] = useState<'array' | 'merge'>('array');

  const mergeItemsWithoutSelf = mergeItems.filter((a) => a !== name);

  // Update from bottom
  const handleChangeType = (e: any) => {
    const newVal = e.target.value as 'array' | 'merge';
    setType(newVal);
    setVariable(name, []);
  };

  const handleDelete = () => {
    setVariable(name, undefined);
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
            onClick={handleDelete}
            style={{ marginLeft: '5px' }}
          />
        </div>
        <div className={styles.contentRight}>
          {type === 'array' && <VariableArrayInput name={name} />}
          {type === 'merge' && (
            <VariableMergeInput
              mergeItems={mergeItemsWithoutSelf}
              name={name}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VariableInputElementCustom;
