import React, { FC } from 'react';
import Pre from './core/Pre';
import { IVariablesContent } from './VariablesInput';
import { serializer } from './VariablesRenderer.utils';

interface IProps {
  variables: IVariablesContent;
}

const VariablesRenderer: FC<IProps> = (props) => {
  const { variables } = props;
  return <Pre>{`"vscodeGitCommit.variables": ${serializer(variables)}`}</Pre>;
};

export default VariablesRenderer;
