import { FC, useState, useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import Sort from '../Sort';
import { getRandomFilm } from '../../handlers/sort';
import * as styles from './Search.css';

const Search: FC = () => {
  const [userInputText, setUserInputText] = useState<string>('');
  const [inputPlaceholder, setInputPlaceholder] = useState<string>('');
  useSearch(userInputText);

  useEffect(() => {
    getRandomFilm().then((res) => setInputPlaceholder(res.title));
  }, []);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={`Search for a title!   e.g ... "${inputPlaceholder}"`}
        className={styles.searchInput}
        onChange={(e) => setUserInputText(e.target.value)}
      />
      <div className={styles.sortBtnGroup}>
        <Sort type="year" />
        <Sort type="alpha" />
        <Sort type="random" />
      </div>
    </div>
  );
};

export default Search;
