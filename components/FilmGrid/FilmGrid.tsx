import type { FC } from 'react';
import { useSearchContext } from '@/context/search';
import { Film } from '@/lib/types';

const FilmGrid: FC<{ films?: Film[] }> = ({ films }) => {
  const { searchedFilms } = useSearchContext();

  if (searchedFilms.length > 0) {
    return (
      <>
        {searchedFilms.map((film) => (
          <h1>{film.title}</h1>
        ))}
      </>
    );
  }

  if (searchedFilms.length === 0 && films) {
    return (
      <>
        {films.map((film) => (
          <>
            <h1>{film.title}</h1>
            <h5>{film.director}</h5>
          </>
        ))}
      </>
    );
  }

  return null;
};

export default FilmGrid;
