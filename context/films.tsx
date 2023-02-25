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
import { Film } from '../lib/types';
import { randomiseFilms } from '../handlers/sort';
import { fetchHttpBasic } from '../handlers/request';

type ContextFilms = {
  films: Film[];
  setFilms: Dispatch<SetStateAction<Film[] | undefined>>;
  searchedFilms: Film[];
  setSearchedFilms: Dispatch<SetStateAction<Film[] | undefined>>;
};

interface Props {
  children: ReactNode;
}

const FilmContext = createContext<ContextFilms>({
  films: [],
  setFilms: () => null,
  searchedFilms: [],
  setSearchedFilms: () => null,
});

export const FilmProvider: FC<Props> = ({ children }) => {
  const [films, setFilms] = useState<Film[] | undefined>();
  const [searchedFilms, setSearchedFilms] = useState<Film[] | undefined>();

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
          searchedFilms: searchedFilms,
          setSearchedFilms: setSearchedFilms,
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
