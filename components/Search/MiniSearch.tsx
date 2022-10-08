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
      <input type="text" onChange={(e) => setUserInputText(e.target.value)} />
      <Sort type="year" />
      <Sort type="alpha" />
      <div
        className={styles.closeBtn}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        X
      </div>
      {userInputText !== '' && <Dropdown />}
    </div>
  ) : (
    <div
      className={styles.closedContainer}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      <p>Open</p>
    </div>
  );
};

export default MiniSearch;
