import { Badge } from '@chakra-ui/layout';
import { FC, useState } from 'react';
import styles from '../styles/Input.module.css';

interface IProps {
  onType: (value: string) => void;
  onSelectOption: (name: string) => void;
}

const Input: FC<IProps> = (props) => {
  const [raw, setRaw] = useState('');

  const base = `&keke${raw}&keke`;

  const nonReplacedValues = base.split(/{\w+}/gm);
  const replacedValues = (base.match(/{\w+}/gm) ?? '')
    .toString()
    .slice(1, -1)
    .split('},{')
    .map((variable, key) => (
      <span className={styles.badge} key={key}>
        {variable}
      </span>
    ));

  const displayedInput = nonReplacedValues.map((rr, i) => {
    const badge = replacedValues[i] ?? <></>;
    return (
      <>
        <span>{rr.replaceAll('&keke', '').replaceAll('', '')}</span>
        {badge}
      </>
    );
  });

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
      />
      <pre className={styles.display}>{displayedInput}</pre>
    </div>
  );
};

export default Input;
