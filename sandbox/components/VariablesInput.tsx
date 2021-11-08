import React, { FC, useState } from 'react';
import { Descendant } from 'slate';
import { CustomElement } from '../typings/Editor';
import { parseVariable } from './VariablesInput.utils';
import styles from '../styles/VariableInput.module.css';
import { IVar } from './core/VariableInput';
import VariableInputElement from './VariablesInputElement';
import { Divider, Input } from '@chakra-ui/react';
import VariableAdd from './VariableAdd';
import VariableInputElementCustom from './VariablesInputElementCustom';

interface IProps {
  template: Descendant[];
  onChange: (datas: IVariablesContent) => void;
}

export interface IVariablesContent {
  [key: string]: IVar[] | undefined;
}

const VariableInput: FC<IProps> = (props) => {
  const { template, onChange } = props;

  const [variablesContent, setVariablesContent] = useState<IVariablesContent>(
    {}
  );

  const variablesFromTemplate: string[] =
    parseVariable(template as CustomElement[]) ?? [];

  const [variablesCustom, setVariablesCustom] = useState<string[]>([]);

  const handleVariableUpdate = (v: string, variable?: IVar[]) => {
    setVariablesContent({ ...variablesContent, [v]: variable });
    onChange({ ...variablesContent, [v]: variable });
  };

  const handleAdd = (name: string) => {
    if (
      variablesFromTemplate
        .map((a) => a.toLowerCase())
        .includes(name.toLowerCase()) ||
      variablesCustom.map((a) => a.toLowerCase()).includes(name.toLowerCase())
    ) {
      return;
    }
    setVariablesCustom((oldValue) => [...oldValue, name]);
  };

  const handleDelete = (name: string) => {
    setVariablesCustom((oldValue) => oldValue.filter((o) => o !== name));
  };

  return (
    <div className={styles.container}>
      {variablesFromTemplate.map((v) => (
        <VariableInputElement
          name={v}
          onChange={handleVariableUpdate}
          key={v}
        />
      ))}
      <Divider className={styles.divider} />
      {variablesCustom.map((v) => (
        <VariableInputElementCustom
          name={v}
          onChange={handleVariableUpdate}
          key={v}
          onDelete={() => handleDelete(v)}
        />
      ))}
      <Divider className={styles.divider} />
      <VariableAdd onAdd={handleAdd} />
    </div>
  );
};

export default VariableInput;
