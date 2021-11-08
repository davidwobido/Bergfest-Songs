import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Registration from './components/form/Form';
import Title from './components/title/Title';
import AddSong from './components/MusicForm/MusicForm';
import ShowSongs from './components/Songs/Songs';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(
    sessionStorage.getItem('selectedUserName')
  );

  let content;
  let songs;
  if (selectedUserName) {
    content = <AddSong />;
    songs = <ShowSongs />;
  } else {
    //  <Registration onSelectUserName={(userName) => setSelectedUserName(userName)} /> same as:
    content = <Registration onSelectUserName={setSelectedUserName} />;
    songs = <p>.</p>;
  }

  useEffect(() => {
    if (selectedUserName) {
      sessionStorage.setItem('selectedUserName', selectedUserName);
    } else {
      sessionStorage.removeItem('selectedUserName');
    }
  }, [selectedUserName]);

  useEffect(() => {
    document.title = selectedUserName ? `Hi ${selectedUserName}` : `Bergfest`;
  });

  return (
    <div className={styles.backgroundImage}>
      <main className={styles.container}>
        <Title
          text={selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest'}
        />
        {content}
        {songs}
        {selectedUserName !== null && (
          <button
            className={styles.logOutButton}
            onClick={() => setSelectedUserName(null)}
          >
            Logout user
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
