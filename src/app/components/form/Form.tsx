import React, { FormEvent, useState } from 'react';
import styles from './Form.module.css';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type RegistrationProps = {
  onSelectUserName: (userName: string) => void; //void same as undefined
};

function Registration({ onSelectUserName }: RegistrationProps): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  // const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
  }

  //Use useState to change users
  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const newUsers = await response.json();
    setUsers(newUsers);
  }

  // Generate UserOptions HTML-Element <option>Jane Doe</option>
  const UserOptions = users.map((user) => (
    <option key={user.id}>
      {user.firstName} {user.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.form__title}>
        {' '}
        Select a user or
        <br />
        submit your name
      </h2>
      <select
        onClick={handleSelectClick}
        className={styles.form__selector}
        onChange={(event) => onSelectUserName(event.target.value)}
      >
        <option>Select a user</option>
        {UserOptions}
      </select>
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

export default Registration;
