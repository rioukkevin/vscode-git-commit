import React, { FC, useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/store';
import SelectString from './SelectString';

interface IProps {
  name: string;
}

type TVariable = string | undefined;

const FILE_STATUS = ['staged', 'changed'];
const FILE_ACTIONS = ['deleted', 'updated', 'added'];

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
      if (parts[2]) {
        setFilesStatus(parts[1]);
        setFilesActions(parts[2]);
      } else {
        if (FILE_STATUS.includes(parts[1])) {
          setFilesStatus(parts[1]);
        } else if (FILE_ACTIONS.includes(parts[1])) {
          setFilesActions(parts[1]);
        }
      }
    }
  }, [value]);

  useEffect(() => {
    handleChange(undefined, undefined);
  }, []);

  // update from bottom
  const handleChange = (status: TVariable, actions: TVariable) => {
    const base = 'files';

    console.log('CHANGE', status, actions);

    const stringified = `${base}${status ? `.${status}` : ''}${
      actions ? `.${actions}` : ''
    }`;
    setVariable(name, stringified);
  };

  const handleChangeStatus = (v: TVariable) => {
    setFilesStatus(v);
    handleChange(v, filesActions);
  };

  const handleChangeActions = (v: TVariable) => {
    setFilesActions(v);
    handleChange(filesStatus, v);
  };

  return (
    <>
      <SelectString
        value={filesStatus}
        mergeItems={FILE_STATUS}
        onChange={handleChangeStatus}
      />
      <SelectString
        value={filesActions}
        mergeItems={FILE_ACTIONS}
        onChange={handleChangeActions}
      />
    </>
  );
};

export default VariableFileInput;
