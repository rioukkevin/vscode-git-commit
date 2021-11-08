import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import React, { FC, useState } from 'react';
import styles from '../styles/VariableAdd.module.css';

interface IProps {
  onAdd: (name: string) => void;
}

const VariableAdd: FC<IProps> = (props) => {
  const { onAdd } = props;

  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    if (value.length > 0) {
      onAdd(value);
      setValue('');
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 1500);
    }
  };

  return (
    <div className={styles.input}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="filled"
        size="sm"
        placeholder="name..."
      />
      <Button
        onClick={handleClick}
        className={styles.button}
        size="sm"
        backgroundColor={isError ? '#db4437' : undefined}
        color={isError ? '#FBFFFF' : undefined}
        _hover={{
          backgroundColor: isError ? '#db4437' : undefined,
        }}
      >
        {isError ? 'Nope 🤪' : 'Add custom variable'}
      </Button>
    </div>
  );
};

export default VariableAdd;
