import React, { useState } from 'react';
import styles from './App.module.css';
import Registration from './components/form/Form';
import Title from './components/title/Title';
// import Library from './components/library/Library';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  let content;
  if (selectedUserName) {
    content = <p>Please add your songs</p>;
  } else {
    //  <Registration onSelectUserName={(userName) => setSelectedUserName(userName)} /> same as:
    content = <Registration onSelectUserName={setSelectedUserName} />;
  }

  return (
    <div className={styles.backgroundImage}>
      <main className={styles.container}>
        <Title
          text={selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest'}
        />

        {content}
      </main>
    </div>
  );
}

export default App;
