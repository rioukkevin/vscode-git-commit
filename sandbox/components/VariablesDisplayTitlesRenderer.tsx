import React, { FC, useContext } from 'react';
import { Store } from '../utils/store';
import Pre from './core/Pre';

interface IProps {}

const VariablesDisplayTitlesRenderer: FC<IProps> = (props) => {
  const { variablesDisplayTitles } = useContext(Store);
  return (
    <Pre>
      {`"vscodeGitCommit.variablesDisplayTitles": ${JSON.stringify(
        { ...variablesDisplayTitles },
        null,
        2
      )}`}
    </Pre>
  );
};

export default VariablesDisplayTitlesRenderer;
