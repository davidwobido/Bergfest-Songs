import React, { FormEvent, useState } from 'react';
import styles from './MusicForm.module.css';

type Song = {
  id: number;
  artist: string;
  title: string;
};

function AddSong() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [songs, setSongs] = useState<Song[]>([]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/songs', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },

      body: JSON.stringify({
        artist: artist,
        title: title,
      }),
    });
  }

  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/songs');
    const newSongs = await response.json();
    setSongs(newSongs);
  }

  const songList = songs.map((song) => (
    <ul key={song.id}>
      {song.artist}'—'{song.title}
    </ul>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add a song</h2>
      <input
        type="text"
        className={styles.form__text}
        placeholder="Artist"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />
      <input
        type="text"
        className={styles.form__text}
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type="submit" className={styles.form__submit} />
    </form>
  );
}

export default AddSong;
