import React, { FC, useContext, useEffect } from 'react';
import { Store } from '../../utils/store';

interface IProps {
  name: string;
}

const KEY_VALUE = 'branch';

const VariableBranchInput: FC<IProps> = (props) => {
  const { name } = props;

  const { variables, setVariable } = useContext(Store);

  useEffect(() => {
    setVariable(name, KEY_VALUE);

    return () => {
      if (variables[name] === KEY_VALUE) {
        setVariable(name, undefined);
      }
    };
  }, []);

  return <></>;
};

export default VariableBranchInput;
