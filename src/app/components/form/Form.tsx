import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <form className={styles.form}>
      <h1 className={styles.form__title}>Bergfest</h1>
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
