import type { FC } from 'react';
import { useFilmContext } from '../../context/films';
import { getTopFive } from '../../handlers/sort';

// to do
// move this to be returned from API (endpoint developed)
const TOP_5_DEAD_OR_ALIVE_YOU_AINT_GOTTA_REMIND_ME = [
  'Apocalypse Now',
  'Uncut Gems',
  'Stalker',
  'Casino',
  'Fear and Loathing in Las Vegas',
];

const FilmGrid: FC = () => {
  const { films, searchedFilms, genreSearchedFilms } = useFilmContext();
  const topFive = getTopFive(TOP_5_DEAD_OR_ALIVE_YOU_AINT_GOTTA_REMIND_ME);

  if (genreSearchedFilms !== null) {
    return (
      <>
        {genreSearchedFilms.map((genre) => (
          <div key={genre.genre}>
            <h3>{genre.genre}</h3>
            {genre.films.map((film) => (
              <div key={film.film_id}>
                <p>{film.title}</p>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  }

  if (searchedFilms.length && searchedFilms.length < films.length) {
    return (
      <>
        {searchedFilms.map((film) => (
          <div key={film?.film_id}>
            <p>{film?.title}</p>
          </div>
        ))}
      </>
    );
  }

  if (films.length > 0 && topFive !== null) {
    return (
      <>
        <h1>Top Five</h1>
        {topFive &&
          topFive.map((film) => (
            <div key={film?.film_id}>
              <p>{film?.title}</p>
            </div>
          ))}
        <br />
        <h1>List</h1>
        {films &&
          films.map((film) => (
            <div key={film?.film_id}>
              <p>{film?.title}</p>
            </div>
          ))}
      </>
    );
  }

  return null;
};

export default FilmGrid;
