import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { useFilmContext } from '../../context/films';
import { getTopFive } from '../../handlers/sort';
import FilmPanel from './FilmPanel';
import * as styles from './FilmGrid.css';
import { EmblaCarousel } from './Carousel';

// to do
// move this to be returned from API (endpoint developed)
const TOP_5_DEAD_OR_ALIVE_YOU_AINT_GOTTA_REMIND_ME = [
  'Apocalypse Now',
  'Uncut Gems',
  'Stalker',
  'Casino',
  'Fear and Loathing in Las Vegas',
];

interface Props {
  children: ReactNode;
}

const FilmGridContainer: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

const FilmGrid: FC = () => {
  const { films, searchedFilms, genreSearchedFilms } = useFilmContext();
  const topFive = getTopFive(TOP_5_DEAD_OR_ALIVE_YOU_AINT_GOTTA_REMIND_ME);

  // If user has sorted films by ascending or descending
  if (genreSearchedFilms !== null) {
    return (
      <FilmGridContainer>
        {genreSearchedFilms.map((genre) => (
          <div key={genre.genre} className={styles.categoryContainer}>
            <h3 className={styles.categoryHeading}>{genre.genre}</h3>
            <div className={clsx(styles.gridContainer, styles.alignStart)}>
              {genre.films && <EmblaCarousel films={genre.films} />}
            </div>
          </div>
        ))}
      </FilmGridContainer>
    );
  }

  // If user has searched using the main header on the front page
  if (searchedFilms.length && searchedFilms.length < films.length) {
    return (
      <FilmGridContainer>
        <div className={clsx(styles.gridContainer, styles.alignCenter)}>
          {searchedFilms &&
            searchedFilms.map((searchedFilm) => (
              <FilmPanel
                id={searchedFilm.film_id}
                thumbnail={searchedFilm.thumbnail}
              />
            ))}
        </div>
      </FilmGridContainer>
    );
  }

  // Default state, showing TOP 5 films and all films, randomised
  if (films.length > 0 && topFive !== null) {
    return (
      <FilmGridContainer>
        <h1 className={styles.heading}>Top Five</h1>
        <div className={clsx(styles.gridContainer, styles.alignStart)}>
          <EmblaCarousel films={topFive} />
        </div>
        <br />
        <h1 className={styles.heading}>ALL</h1>
        <div className={clsx(styles.gridContainer, styles.alignCenter)}>
          {films &&
            films.map((film) => (
              <FilmPanel id={film.film_id} thumbnail={film.thumbnail} />
            ))}
        </div>
      </FilmGridContainer>
    );
  }

  return null;
};

export default FilmGrid;
