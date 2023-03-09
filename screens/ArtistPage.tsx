import type { FC } from 'react';
import { Film } from '../lib/types';
import FilmPanel from '../components/FilmGrid/FilmPanel';
import * as styles from './ArtistPage.css';

interface Props {
  artist: string;
  films: Film[];
}

const ArtistPage: FC<Props> = ({ artist, films }) => {
  return (
    <div className={styles.container}>
      <h1>{artist}</h1>
      <div className={styles.movieContainer}>
        {films.map((film) => (
          <FilmPanel id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
