import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from 'react';
import { Film } from '@/lib/types';

type ContextSearch = {
  searchedFilms: Film[];
  setSearchedFilms: Dispatch<SetStateAction<Film[]>>;
};

interface Props {
  children: ReactNode;
}

const SearchContext = createContext<ContextSearch>({
  searchedFilms: [],
  setSearchedFilms: () => null,
});

export const SearchProvider: FC<Props> = ({ children }) => {
  const [searchedFilms, setSearchedFilms] = useState<Film[]>([]);

  console.log('context', searchedFilms);

  return (
    <SearchContext.Provider
      value={{
        searchedFilms: searchedFilms,
        setSearchedFilms: setSearchedFilms,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
