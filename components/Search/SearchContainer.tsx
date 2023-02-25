import type { FC } from 'react';
import Search from './Search';
import Sort from '../Sort/Sort';
import * as styles from './Search.css';

const SearchContainer: FC = () => {
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.sortBtnGroup}>
        <Sort type="year" />
        <Sort type="alpha" />
        <Sort type="random" />
      </div>
    </div>
  );
};

export default SearchContainer;
