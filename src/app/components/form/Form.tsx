import React from 'react';
import Title from '../title/Title';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <form className={styles.form}>
      <Title text="Bergfest" />
      <input
        type="text"
        className={styles.form__text}
        placeholder="First Name"
      ></input>
      <input
        type="text"
        className={styles.form__text}
        placeholder="Second Name"
      ></input>
      <input type="submit" className={styles.form__submit}></input>
    </form>
  );
}

export default Form;
