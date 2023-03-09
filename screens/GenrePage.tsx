import type { FC } from 'react';
import { Film } from '../lib/types';
import FilmPanel from '../components/FilmGrid/FilmPanel';
import * as styles from './GenrePage.css';

interface Props {
  genre: string;
  films: Film[];
}

const GenrePage: FC<Props> = ({ genre, films }) => {
  return (
    <div className={styles.container}>
      <h1>{genre}</h1>
      <div className={styles.movieContainer}>
        {films.map((film) => (
          <FilmPanel id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
