import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from 'react';
import { Film, FilmsByGenre } from '../lib/types';
import { randomiseFilms } from '../handlers/sort';
import { fetchHttpBasic } from '../handlers/request';

type ContextFilms = {
  films: Film[];
  setFilms: Dispatch<SetStateAction<Film[] | undefined>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchedFilms: Film[];
  setSearchedFilms: Dispatch<SetStateAction<Film[] | undefined>>;
  genreSearchedFilms: FilmsByGenre | null;
  setGenreSearchedFilms: Dispatch<SetStateAction<FilmsByGenre | null>>;
};

interface Props {
  children: ReactNode;
}

const FilmContext = createContext<ContextFilms>({
  films: [],
  setFilms: () => null,
  searchTerm: '',
  setSearchTerm: () => null,
  searchedFilms: [],
  setSearchedFilms: () => null,
  genreSearchedFilms: [],
  setGenreSearchedFilms: () => null,
});

export const FilmProvider: FC<Props> = ({ children }) => {
  const [films, setFilms] = useState<Film[] | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchedFilms, setSearchedFilms] = useState<Film[] | undefined>();
  const [genreSearchedFilms, setGenreSearchedFilms] =
    useState<FilmsByGenre | null>(null);

  useEffect(() => {
    fetchHttpBasic('films')
      .then((data) => {
        const randomisedData = randomiseFilms(data);
        setFilms([...randomisedData]);
        setSearchedFilms([...randomisedData]);
      })
      .catch((err) => console.error('fuck', err));
  }, []);

  if (films && searchedFilms) {
    return (
      <FilmContext.Provider
        value={{
          films: films,
          setFilms: setFilms,
          searchTerm: searchTerm,
          setSearchTerm: setSearchTerm,
          searchedFilms: searchedFilms,
          setSearchedFilms: setSearchedFilms,
          genreSearchedFilms: genreSearchedFilms,
          setGenreSearchedFilms: setGenreSearchedFilms,
        }}
      >
        {children}
      </FilmContext.Provider>
    );
  }

  return null;
};

export const useFilmContext = () => {
  return useContext(FilmContext);
};
