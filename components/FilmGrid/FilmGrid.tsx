import type { FC } from 'react';
import { useSearchContext } from '@/context/search';
import { Film } from '@/lib/types';
import Pagination from '../Pagination/Pagination';
import FilmTile from '../FilmTile/FilmTile';
import * as styles from './FilmGrid.css';
import clsx from 'clsx';

interface Props {
  films?: Film[];
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

  if (searchedFilms.length === 0 && films) {
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
  }

  return null;
};

export default FilmGrid;
