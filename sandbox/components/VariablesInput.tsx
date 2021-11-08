import React, { FC, useCallback, useEffect, useState } from 'react';
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
  [key: string]: IVar[] | string[] | undefined;
}

const VariableInput: FC<IProps> = (props) => {
  const { template, onChange } = props;

  // States
  const [variablesContent, setVariablesContent] = useState<IVariablesContent>(
    {}
  );
  const [variablesFromTemplate, setVariablesFromTemplate] = useState<string[]>(
    []
  );
  const [variablesCustom, setVariablesCustom] = useState<string[]>([]);

  // Dynamic variables
  const availableForMerge = [
    ...variablesFromTemplate,
    ...variablesCustom,
  ].filter((n) => !!variablesContent[n]);

  // Update from top
  useEffect(() => {
    const newVariables = parseVariable(template as CustomElement[]) ?? [];
    setVariablesFromTemplate(newVariables);
  }, [template]);

  // Update from bottom
  const handleVariableUpdate = (v: string, variable?: IVar[] | string[]) => {
    setVariablesContent({ ...variablesContent, [v]: variable });
    onChange({ ...variablesContent, [v]: variable });
  };

  // Custom variable actions
  const handleAdd = (name: string) => {
    // Verif no double
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
    // Update Content
    setVariablesContent({ ...variablesContent, [name]: undefined });
    onChange({ ...variablesContent, [name]: undefined });
  };

  return (
    <div className={styles.container}>
      {variablesFromTemplate.map((v) => (
        <VariableInputElement
          name={v}
          onChange={handleVariableUpdate}
          key={v}
          mergeItems={availableForMerge}
        />
      ))}
      <Divider className={styles.divider} />
      {variablesCustom.map((v) => (
        <VariableInputElementCustom
          name={v}
          onChange={handleVariableUpdate}
          key={v}
          onDelete={() => handleDelete(v)}
          mergeItems={availableForMerge}
        />
      ))}
      {variablesCustom.length > 0 && <Divider className={styles.divider} />}
      <VariableAdd onAdd={handleAdd} />
    </div>
  );
};

export default VariableInput;
