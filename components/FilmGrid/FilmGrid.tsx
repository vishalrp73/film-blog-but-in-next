import { FC, useState, useEffect } from 'react';
import { Film } from '../../lib/types';
import { randomiseFilms } from '../../handlers/sort';
import { useFilmContext } from '../../context/films';
import { getTopFive } from '../../handlers/sort';
import Panel from './Panel';
import * as styles from './FilmGrid.css';

const TOP_5_DEAD_OR_ALIVE_YOU_AINT_GOTTA_REMIND_ME = [
  'Apocalypse Now',
  'Uncut Gems',
  'Stalker',
  'Casino',
  'Fear and Loathing in Las Vegas',
];

const FilmGrid: FC = () => {
  const [films] = useFilmContext();
  const [topFive, setTopFive] = useState<Film[]>();

  useEffect(() => {
    getTopFive(TOP_5_DEAD_OR_ALIVE_YOU_AINT_GOTTA_REMIND_ME)
      .then((res) => setTopFive(randomiseFilms(res)))
      .catch((err) => console.log('oh no', err));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Top Five</h1>
      <div className={styles.gridContainer}>
        {topFive &&
          topFive.map((film) => (
            <Panel
              id={film.film_id}
              title={film.title}
              thumbnail={film.thumbnail}
            />
          ))}
      </div>
      <h1>------------------------</h1>
      <div className={styles.gridContainer}>
        {films &&
          films.map((film) => (
            <Panel
              id={film.film_id}
              title={film.title}
              thumbnail={film.thumbnail}
            />
          ))}
      </div>
    </div>
  );
};

export default FilmGrid;
