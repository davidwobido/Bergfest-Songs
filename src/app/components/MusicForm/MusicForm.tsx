import React, { FormEvent, useState } from 'react';
import styles from './MusicForm.module.css';

function AddSong() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.form__title}>Add a song to the list</h2>
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
