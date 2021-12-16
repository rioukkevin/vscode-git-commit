import React, { FC, useContext } from 'react';
import { Store } from '../utils/store';
import Pre from './core/Pre';

interface IProps {}

const InsertionModeRenderer: FC<IProps> = (props) => {
  const { insertionMode } = useContext(Store);
  return (
    <Pre>
      {insertionMode
        ? '"vscodeGitCommit.insertMode": "Concatenate"'
        : '"vscodeGitCommit.insertMode": "Replace"'}
    </Pre>
  );
};

export default InsertionModeRenderer;
