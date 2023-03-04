import type { FC, ReactNode } from 'react';
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

  if (genreSearchedFilms !== null) {
    return (
      <FilmGridContainer>
        {genreSearchedFilms.map((genre) => (
          <div key={genre.genre}>
            <h3>{genre.genre}</h3>
            <div className={styles.gridContainer}>
              {genre.films && <EmblaCarousel films={genre.films} />}
            </div>
          </div>
        ))}
      </FilmGridContainer>
    );
  }

  if (searchedFilms.length && searchedFilms.length < films.length) {
    return (
      <FilmGridContainer>
        <div className={styles.gridContainer}>
          {searchedFilms &&
            searchedFilms.map((searchedFilm) => (
              <FilmPanel
                id={searchedFilm.film_id}
                title={searchedFilm.title}
                thumbnail={searchedFilm.thumbnail}
              />
            ))}
        </div>
      </FilmGridContainer>
    );
  }

  if (films.length > 0 && topFive !== null) {
    return (
      <FilmGridContainer>
        <h1>Top Five</h1>
        <div className={styles.gridContainer}>
          <EmblaCarousel films={topFive} />
        </div>
        <br />
        <h1>List</h1>
        <div className={styles.gridContainer}>
          {films &&
            films.map((film) => (
              <FilmPanel
                id={film.film_id}
                title={film.title}
                thumbnail={film.thumbnail}
              />
            ))}
        </div>
      </FilmGridContainer>
    );
  }

  return null;
};

export default FilmGrid;
