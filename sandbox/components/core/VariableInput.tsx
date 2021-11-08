import { Input } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { IVariable } from '../../typings/Data';
import styles from '../../styles/StringInput.module.css';

interface IProps {
  value: IVar;
  onChange: (label: string, detail: string) => void;
  onDelete?: () => void;
}

export interface IVar extends Omit<IVariable, 'key'> {}

const VariableInput: FC<IProps> = (props) => {
  const { value, onChange } = props;

  const [label, setLabel] = useState<string>(value.label);
  const [detail, setDetail] = useState<string>(value.detail ?? '');

  const handleChangeLabel = (e: any) => {
    onChange(e.target.value, detail);
    setLabel(e.target.value);
  };

  const handleChangeDetail = (e: any) => {
    onChange(label, e.target.value);
    setDetail(e.target.value);
  };

  useEffect(() => {
    setLabel(value.label);
    setDetail(value.detail ?? '');
  }, [value]);

  return (
    <div className={styles.container}>
      <Input
        size="sm"
        placeholder="nom..."
        value={label}
        onChange={handleChangeLabel}
      />
      <Input
        size="sm"
        placeholder="description..."
        value={detail}
        onChange={handleChangeDetail}
      />
    </div>
  );
};

export default VariableInput;
