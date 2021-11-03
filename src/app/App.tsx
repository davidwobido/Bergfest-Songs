import React from 'react';
import styles from './App.module.css';
import Form from './components/form/Form';

function App(): JSX.Element {
  return (
    <div className={styles.backgroundImage}>
      <main className={styles.container}>
        <Form />
      </main>
    </div>
  );
}

export default App;
