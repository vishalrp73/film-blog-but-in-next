import { FC, useState, Dispatch, SetStateAction } from 'react';
import { useSearch } from '../../hooks/useSearch';
import Sort from '../Sort';
import Dropdown from './Dropdown';
import * as styles from './MiniSearch.css';

interface SearchProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MiniSearch: FC<SearchProps> = ({ toggle, setToggle }) => {
  const [userInputText, setUserInputText] = useState<string>('');
  useSearch(userInputText);

  return toggle ? (
    <div className={styles.miniContainer}>
      <div className={styles.miniInputContainer}>
        <input
          className={styles.searchInput}
          type="text"
          onChange={(e) => setUserInputText(e.target.value)}
        />
        <Sort type="year" />
        <Sort type="alpha" />
        <button
          className={styles.closeBtn}
          onClick={() => setToggle((prevState) => !prevState)}
        >
          X
        </button>
      </div>
      {userInputText !== '' && <Dropdown />}
    </div>
  ) : (
    <button
      className={styles.closedContainer}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      Open
    </button>
  );
};

export default MiniSearch;
