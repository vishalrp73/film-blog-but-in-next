import type { FC } from 'react';
import { useFilmContext } from '../../context/films';
import { useSearch } from '../../lib/hooks/useSearch';
import { getRandomFilm } from '../../handlers/sort';
import * as styles from './Search.css';
import Sort from '../Sort/Sort';

const Search: FC = () => {
  const { searchTerm, setSearchTerm } = useFilmContext();
  const randomFilm = getRandomFilm();
  useSearch(searchTerm);

  return (
    <div className={styles.container}>
      <input
        id="mainSearch"
        value={searchTerm}
        className={styles.searchInput}
        placeholder={
          randomFilm
            ? `Search for a title!   e.g ... "${randomFilm.title}"`
            : 'Search for a title!'
        }
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm !== '' && (
        <div className={styles.sortBtnGroup}>
          <Sort type="year" />
          <Sort type="alpha" />
        </div>
      )}
    </div>
  );
};

export default Search;
