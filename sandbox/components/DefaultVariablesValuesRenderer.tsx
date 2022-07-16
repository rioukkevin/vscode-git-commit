import React, { FC, useContext } from 'react';
import { Store } from '../utils/store';
import Pre from './core/Pre';

interface IProps {}

const DefaultVariablesValuesRenderer: FC<IProps> = (props) => {
  const { defaultVariablesValues } = useContext(Store);
  return (
    <Pre>
      {`"vscodeGitCommit.defaultVariablesValues": ${JSON.stringify(
        { ...defaultVariablesValues },
        null,
        2
      )}`}
    </Pre>
  );
};

export default DefaultVariablesValuesRenderer;
