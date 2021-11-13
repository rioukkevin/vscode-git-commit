import React, { FC, useState } from 'react';
import styles from '../styles/VariableInput.module.css';
import { Select } from '@chakra-ui/select';
import VariableArrayInput from './core/VariableArrayInput';
import { IVar } from './core/VariableInput';
import VariableMergeInput from './core/VariableMergeInput';
import VariablePredefinedInput from './core/VariablePredefinedInput';

interface IProps {
  name: string;
  onChange: (name: string, newValue?: IVar[] | string[] | string) => void;
  onDelete?: () => void;
  mergeItems: string[];
}

const VariableInputElement: FC<IProps> = (props) => {
  const { name, onChange, mergeItems } = props;

  const [type, setType] = useState<'string' | 'array' | 'merge' | 'predefined'>(
    'string'
  );

  const mergeItemsWithoutSelf = mergeItems.filter((a) => a !== name);

  // Update from bottom
  const handleChangeType = (e: any) => {
    const newVal = e.target.value as
      | 'string'
      | 'array'
      | 'merge'
      | 'predefined';
    setType(newVal);
    if (newVal === 'string' || newVal === 'predefined') {
      onChange(name, undefined);
    } else {
      onChange(name, []);
    }
  };

  const handleChangeData = (
    name: string,
    content: IVar[] | string[] | string | undefined
  ) => {
    onChange(name, content);
  };

  return (
    <>
      <h3 className={styles.name} key={name}>
        {name}
      </h3>
      <div className={styles.content} key={name}>
        <div className={styles.contentLeft}>
          <Select
            size="sm"
            value={type}
            onChange={handleChangeType}
            variant="filled"
          >
            <option value="string">String</option>
            <option value="array">Array</option>
            <option value="merge">Merge</option>
            <option value="predefined">Predefined</option>
          </Select>
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
          {type === 'predefined' && (
            <VariablePredefinedInput
              onChange={(variable) => handleChangeData(name, variable)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VariableInputElement;
