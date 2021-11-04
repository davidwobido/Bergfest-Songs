import React, { useState } from 'react';
import styles from './App.module.css';
import Registration from './components/form/Form';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  return (
    <div className={styles.backgroundImage}>
      <main className={styles.container}>
        {/* <Registration onSelectUserName={(userName) => setSelectedUserName(userName)} /> same as: */}
        <Registration onSelectUserName={setSelectedUserName} />
      </main>
    </div>
  );
}

export default App;
