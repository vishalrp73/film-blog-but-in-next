import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react';
import { Film } from '../lib/types';

type ContextFilms = [Film[], Dispatch<SetStateAction<Film[]>>];

interface Props {
  children: ReactNode;
}

const FilmContext = createContext<ContextFilms>([[], () => null]);

export const FilmProvider = ({ children }: Props) => {
  const [films, setFilms] = useState<Film[]>();

  useEffect(() => {
    fetch('http://localhost:4000/films')
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => console.log('fuck', err));
  }, []);

  return (
    films && (
      <FilmContext.Provider value={[films, setFilms]}>
        {children}
      </FilmContext.Provider>
    )
  );
};

export const useFilmContext = () => {
  return useContext(FilmContext);
};
