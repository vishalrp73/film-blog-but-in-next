import { type FC } from 'react';
import clsx from 'clsx';
import { useSearchContext } from '@/context/search';
import { Film } from '@/lib/types';
import Pagination from '../Pagination';
import FilmTile from '../FilmTile';
import * as styles from './FilmGrid.css';

interface Props {
  films: Film[];
  topFive?: Film[];
}

const FilmGrid: FC<Props> = ({ films, topFive }) => {
  const { searchedFilms } = useSearchContext();

  if (searchedFilms.length > 0) {
    return (
      <div className={clsx(styles.container, styles.searchGridContainer)}>
        <Pagination films={searchedFilms} />
      </div>
    );
  }

  return (
    <div className={styles.gridContainer}>
      {topFive && (
        <>
          <h1 className={styles.title}>TOP 5</h1>
          <div className={styles.container}>
            {topFive.map((film) => (
              <FilmTile film={film} key={film.film_id} />
            ))}
          </div>
        </>
      )}
      <div className={styles.genericGridContainer}>
        <h1 className={styles.title}>ALL MOVIES</h1>
        <Pagination films={films} />
      </div>
    </div>
  );
};

export default FilmGrid;
