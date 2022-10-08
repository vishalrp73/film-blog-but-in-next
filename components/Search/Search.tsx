import { FC, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import Sort from '../Sort';
import * as styles from './Search.css';

const Search: FC = () => {
  const [userInputText, setUserInputText] = useState<string>('');
  useSearch(userInputText);

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(e) => setUserInputText(e.target.value)}
      />
      <Sort type="year" />
      <Sort type="alpha" />
      <Sort type="random" />
    </div>
  );
};

export default Search;
