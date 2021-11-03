import React from 'react';
import styles from './Title.module.css';

type TitleProps = { text: string };

function Title({ text }: TitleProps): JSX.Element {
  return <h1 className={styles.form__title}>{text}</h1>;
}

export default Title;
