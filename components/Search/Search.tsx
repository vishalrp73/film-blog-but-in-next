import type { FC } from 'react';
import { useState } from 'react';
import { useSearch } from '../../lib/hooks/useSearch';
import { getRandomFilm } from '../../handlers/sort';
import * as styles from './Search.css';

const Search: FC = () => {
  const [userSearchText, setUserSearchText] = useState<string>('');
  const randomFilm = getRandomFilm();
  useSearch(userSearchText);

  return (
    <input
      className={styles.searchInput}
      placeholder={
        randomFilm
          ? `Search for a title!   e.g ... "${randomFilm.title}"`
          : 'Search for a title!'
      }
      type="text"
      onChange={(e) => setUserSearchText(e.target.value)}
    />
  );
};

export default Search;
