import type { FC } from 'react';
import { Film } from '../../lib/types';
import FilmPanel from '../FilmGrid/FilmPanel';
import * as styles from './Artists.css';

interface Props {
  artist: string;
  films: Film[];
}

const Artists: FC<Props> = ({ artist, films }) => {
  return (
    <div className={styles.container}>
      <h1>{artist}</h1>
      <div className={styles.movieContainer}>
        {films.map((film) => (
          <FilmPanel
            id={film.film_id}
            title={film.title}
            thumbnail={film.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Artists;
