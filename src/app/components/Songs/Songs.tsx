import React, { useEffect, useState } from 'react';
import styles from './Songs.module.css';

type Song = {
  id: number;
  artist: string;
  title: string;
};

function ShowSongs() {
  const [songs, setSongs] = useState<Song[]>([]);

  /*Fetch songs from API */
  async function handleFetchSongs() {
    const response = await fetch('https://json-server.machens.dev/songs');
    const newSongs = await response.json();
    setSongs(newSongs);
  }

  useEffect(() => {
    handleFetchSongs();
  }, []);

  /* Create song list from API */
  const songList = songs.map((song) => (
    <div key={song.id} className={styles.songList__boxes}>
      <div className={styles.songList__title}>{song.title}</div>
      <div className={styles.songList__artist}>by {song.artist}</div>
    </div>
  ));

  return (
    <section>
      <div className={styles.songList}>{songList}</div>
    </section>
  );
}

export default ShowSongs;
