import React, { useState } from 'react';
import styles from './Songs.module.css';

type Song = {
  id: number;
  artist: string;
  title: string;
};

function ShowSongs() {
  const [songs, setSongs] = useState<Song[]>([]);

  /*Fetch songs from API */
  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/songs');
    const newSongs = await response.json();
    setSongs(newSongs);
  }

  handleSelectClick();

  /* Create song list from API */
  const songList = songs.map((song) => (
    <div key={song.id} className={styles.songList}>
      <div className={styles.songList__artist}>{song.artist}</div>
      <div className={styles.songList__title}>by {song.title}</div>
    </div>
  ));

  return (
    <section>
      <p className={styles.songList}>{songList}</p>
    </section>
  );
}

export default ShowSongs;
