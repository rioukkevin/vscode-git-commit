import React, { FC, useContext } from 'react';
import { Store } from '../utils/store';
import { variableSerializer } from '../utils/variables';
import Pre from './core/Pre';

interface IProps {}

const VariablesRenderer: FC<IProps> = (props) => {
  const { variables } = useContext(Store);
  return (
    <Pre>{`"vscodeGitCommit.variables": ${variableSerializer(variables)}`}</Pre>
  );
};

export default VariablesRenderer;
