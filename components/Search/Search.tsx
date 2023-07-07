import { type FC, type Dispatch, type SetStateAction } from 'react';
import { searchInput } from './Search.css';

interface Props {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  placeholderTitle: string;
}

const Search: FC<Props> = ({ searchTerm, setSearchTerm, placeholderTitle }) => {
  return (
    <input
      type="text"
      className={searchInput}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={`enter a film e.g ... ${placeholderTitle}`}
    />
  );
};

export default Search;
