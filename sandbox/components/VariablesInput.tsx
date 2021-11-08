import React, { FC, useState } from 'react';
import { Descendant } from 'slate';
import { CustomElement } from '../typings/Editor';
import { parseVariable } from './VariablesInput.utils';
import styles from '../styles/VariableInput.module.css';
import { Select } from '@chakra-ui/select';
import VariableArrayInput from './core/VariableArrayInput';
import { IVar } from './core/VariableInput';

interface IProps {
  template: Descendant[];
  onChange: (datas: IVariablesContent) => void;
}

export interface IVariablesContent {
  [key: string]: IVar[];
}

const VariableInput: FC<IProps> = (props) => {
  const { template, onChange } = props;

  const [variablesContent, setVariablesContent] = useState<IVariablesContent>(
    {}
  );

  const [type, setType] = useState<'string' | 'array'>('string');

  const variables: string[] = parseVariable(template as CustomElement[]) ?? [];

  const handleVariableUpdate = (variable: IVar[], v: string) => {
    setVariablesContent({ ...variablesContent, [v]: variable });
    onChange({ ...variablesContent, [v]: variable });
  };

  return (
    <div className={styles.container}>
      {variables.map((v) => (
        <>
          <h3 className={styles.name} key={v}>
            @{v}
          </h3>
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              <Select
                size="sm"
                value={type}
                onChange={(e) => setType(e.target.value as 'string' | 'array')}
              >
                <option value="string">String</option>
                <option value="array">Array</option>
              </Select>
            </div>
            <div className={styles.contentRight}>
              <VariableArrayInput
                onChange={(variable) => handleVariableUpdate(variable, v)}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default VariableInput;
