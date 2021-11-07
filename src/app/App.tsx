import React, { useState } from 'react';
import styles from './App.module.css';
import Registration from './components/form/Form';
import Title from './components/title/Title';
import AddSong from './components/MusicForm/MusicForm';
import ShowSongs from './components/Songs/Songs';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

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

  return (
    <div className={styles.backgroundImage}>
      <main className={styles.container}>
        <Title
          text={selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest'}
        />
        {content}
        {songs}
      </main>
    </div>
  );
}

export default App;
