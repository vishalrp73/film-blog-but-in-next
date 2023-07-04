import type { Dispatch, FC, SetStateAction } from 'react';
import { Film } from '@/lib/types';
import * as styles from './Search.css';

interface Props {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  placeholderTitle: string;
}

const Search: FC<Props> = ({ searchTerm, setSearchTerm, placeholderTitle }) => {
  return (
    <input
      type="text"
      className={styles.searchInput}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={`enter a film e.g ... ${placeholderTitle}`}
    />
  );
};

export default Search;
