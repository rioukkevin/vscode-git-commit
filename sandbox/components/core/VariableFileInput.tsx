import React, { FC, useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/store';
import { PREDEFINED_PREFIX } from '../../utils/variables';
import SelectString from './SelectString';

interface IProps {
  name: string;
}

type TVariable = string | undefined;

const VariableFileInput: FC<IProps> = (props) => {
  const { name } = props;

  const [filesStatus, setFilesStatus] = useState<string | undefined>(undefined);
  const [filesActions, setFilesActions] = useState<string | undefined>(
    undefined
  );

  const { variables, setVariable } = useContext(Store);
  const value = variables[name] as TVariable;

  useEffect(() => {
    if (typeof value === 'string') {
      const parts = value?.split('.');
      setFilesStatus(parts[1]);
      setFilesActions(parts[2]);
    }
  }, [value]);

  // update from bottom
  const handleChange = (status: TVariable, actions: TVariable) => {
    let base = 'files';
    if (status) {
      base += `.${status}`;
    }
    if (actions) {
      base += `.${actions}`;
    }
    setVariable(name, base);
  };

  const handleChangeStatus = (v: TVariable) => {
    setFilesStatus(v);
    if (!v) {
      setFilesActions(undefined);
      handleChange(v, undefined);
    } else {
      handleChange(v, filesActions);
    }
  };

  const handleChangeActions = (v: TVariable) => {
    setFilesActions(v);
    handleChange(filesStatus, v);
  };

  return (
    <>
      <SelectString
        value={filesStatus}
        mergeItems={['staged', 'changed']}
        onChange={handleChangeStatus}
      />
      {filesStatus && (
        <SelectString
          value={filesActions}
          mergeItems={['deleted', 'updated', 'added']}
          onChange={handleChangeActions}
        />
      )}
    </>
  );
};

export default VariableFileInput;
