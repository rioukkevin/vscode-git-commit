import React, { FC, useState } from 'react';
import styles from '../styles/VariableInput.module.css';
import { Select } from '@chakra-ui/select';
import VariableArrayInput from './core/VariableArrayInput';
import { IVar } from './core/VariableInput';

interface IProps {
  name: string;
  onChange: (name: string, newValue?: IVar[]) => void;
  onDelete?: () => void;
}

const VariableInputElement: FC<IProps> = (props) => {
  const { name, onChange } = props;

  const [type, setType] = useState<'string' | 'array'>('string');

  const handleChangeType = (e: any) => {
    const newVal = e.target.value as 'string' | 'array';
    setType(newVal);
    if (newVal === 'string') {
      onChange(name, undefined);
    } else {
      onChange(name, []);
    }
  };

  return (
    <>
      <h3 className={styles.name} key={name}>
        {name}
      </h3>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <Select
            size="sm"
            value={type}
            onChange={handleChangeType}
            variant="filled"
          >
            <option value="string">String</option>
            <option value="array">Array</option>
          </Select>
        </div>
        <div className={styles.contentRight}>
          {type === 'array' && (
            <VariableArrayInput
              onChange={(variable) => onChange(name, variable)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VariableInputElement;
