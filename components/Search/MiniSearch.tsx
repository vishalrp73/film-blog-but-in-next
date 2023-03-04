import type { Dispatch, FC, SetStateAction } from 'react';
import { useFilmContext } from '../../context/films';
import { useSearch } from '../../lib/hooks/useSearch';
import Sort from '../Sort/Sort';
import Dropdown from './Dropdown';
import * as styles from './MiniSearch.css';

interface SearchProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MiniSearch: FC<SearchProps> = ({ toggle, setToggle }) => {
  const { searchTerm, setSearchTerm } = useFilmContext();
  useSearch(searchTerm);

  if (toggle) {
    return (
      <div className={styles.miniContainer}>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        {searchTerm !== '' && (
          <>
            <Sort type="year" />
            <Sort type="alpha" />
          </>
        )}
        <button
          className={styles.closeBtn}
          onClick={() => setToggle((prevState) => !prevState)}
        >
          X
        </button>
        {searchTerm !== '' && <Dropdown />}
      </div>
    );
  }

  if (!toggle) {
    return (
      <button
        className={styles.closedContainer}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        open
      </button>
    );
  }

  return null;
};

export default MiniSearch;
