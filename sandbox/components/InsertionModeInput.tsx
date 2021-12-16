import { Switch } from '@chakra-ui/react';
import React, { FC, useContext } from 'react';
import { Store } from '../utils/store';

interface IProps {}

const InsertionModeInput: FC<IProps> = (props) => {
  const { insertionMode, setInsertionMode } = useContext(Store);

  return (
    <div>
      Replace{' '}
      <Switch
        isChecked={insertionMode}
        onChange={(e) => setInsertionMode(e.target.checked)}
        colorScheme="red"
        size="md"
      />{' '}
      Concatenate
    </div>
  );
};

export default InsertionModeInput;
