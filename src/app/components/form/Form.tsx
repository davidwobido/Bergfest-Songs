import React, { useState } from 'react';
import Title from '../title/Title';
import styles from './Form.module.css';

function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  console.log(firstName, lastName, firstName, lastName, firstName);
  return (
    <form className={styles.form}>
      <Title text="Bergfest" />
      <input
        type="text"
        className={styles.form__text}
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        className={styles.form__text}
        placeholder="Second Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input type="submit" className={styles.form__submit} />
    </form>
  );
}

export default Form;
