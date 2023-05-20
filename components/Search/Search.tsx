import type { Dispatch, FC, SetStateAction } from 'react';
import { Film } from '@/lib/types';

interface Props {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  randomFilm: Film;
}

const Search: FC<Props> = ({ searchTerm, setSearchTerm, randomFilm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={`enter a film e.g ... ${randomFilm.title}`}
    />
  );
};

export default Search;
