import React, { FC, useContext } from 'react';
import { LineElement } from '../typings/Editor';
import styles from '../styles/VariableInput.module.css';
import VariableInputElement from './VariablesInputElement';
import { Divider, Input } from '@chakra-ui/react';
import VariableAdd from './VariableAdd';
import VariableInputElementCustom from './VariablesInputElementCustom';
import { Store } from '../utils/store';
import { parseVariableFromTemplate } from '../utils/template';
import { PREDEFINED_PREFIX } from '../utils/variables';

interface IProps {}

const VariableInput: FC<IProps> = (props) => {
  const { variables, template, setVariable } = useContext(Store);

  const templateVariables =
    parseVariableFromTemplate(template as LineElement[]) ?? [];
  const customVariables =
    Object.keys(variables).filter(
      (v) => !templateVariables?.includes(v) && variables[v] !== undefined
    ) ?? [];

  const availableForMerge = [...templateVariables, ...customVariables].filter(
    (n) => !!variables[n]
  );

  const handleAdd = (name: string) => {
    // Verif no double
    if (
      templateVariables
        .map((a) => a.toLowerCase())
        .includes(name.toLowerCase()) ||
      customVariables
        .map((a) => a.toLowerCase())
        .includes(name.toLowerCase()) ||
      PREDEFINED_PREFIX.map((a) => a.toLowerCase()).includes(name.toLowerCase())
    ) {
      return;
    }
    setVariable(name, []);
  };

  return (
    <div className={styles.container}>
      {templateVariables.map((v) => (
        <VariableInputElement
          name={v}
          key={v}
          mergeItems={[...availableForMerge, ...PREDEFINED_PREFIX]}
        />
      ))}
      <Divider className={styles.divider} />
      {customVariables.map((v) => (
        <VariableInputElementCustom
          name={v}
          key={v}
          mergeItems={[...availableForMerge, ...PREDEFINED_PREFIX]}
        />
      ))}
      {customVariables.length > 0 && <Divider className={styles.divider} />}
      <VariableAdd onAdd={handleAdd} />
    </div>
  );
};

export default VariableInput;
