import { CheckIcon, CopyIcon, IconProps } from '@chakra-ui/icons';
import { ComponentWithAs, IconButton } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import styles from '../../styles/Pre.module.css';

interface IProps {
  children: string;
}

const Pre: FC<IProps> = (props) => {
  const [Icon, setIcon] = useState<ComponentWithAs<'svg', IconProps>>(CopyIcon);
  const [color, setColor] = useState('#FDFFFF');

  const handleClick = () => {
    navigator.clipboard.writeText(props.children);
    setColor('#AFDDC9');
    setIcon(CheckIcon);
    setTimeout(() => {
      setColor('#FDFFFF');
      setIcon(CopyIcon);
    }, 1000);
  };

  return (
    <div className={styles.preContainer}>
      <pre>{props.children}</pre>
      <IconButton
        className={styles.copyIcon}
        aria-label="copy"
        icon={<Icon />}
        color="#292A2B"
        backgroundColor={color}
        size="sm"
        onClick={handleClick}
      />
    </div>
  );
};

export default Pre;
