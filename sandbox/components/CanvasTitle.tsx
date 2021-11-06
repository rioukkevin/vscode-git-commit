import { Heading } from '@chakra-ui/layout';
import React, { FC } from 'react';
import styles from '../styles/CanvasTitle.module.css';

interface IProps {
  title: string;
}

const CanvasTitle: FC<IProps> = (props) => {
  const { title } = props;
  return <Heading className={styles.title}>{title}</Heading>;
};

export default CanvasTitle;
