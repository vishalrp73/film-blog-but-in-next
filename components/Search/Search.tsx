import { useRouter } from 'next/router';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import Sort from '../Sort';
import Dropdown from './Dropdown';
import * as styles from './Search.css';

const Search: FC = () => {
  const router = useRouter();
  const [userInputText, setUserInputText] = useState<string>('');
  useSearch(userInputText);

  return (
    <div
      className={clsx({
        [styles.container]: router.asPath === '/',
        [styles.miniContainer]: router.asPath !== '/',
      })}
    >
      <input type="text" onChange={(e) => setUserInputText(e.target.value)} />
      <Sort type="year" />
      <Sort type="alpha" />
      {router.asPath !== '/' && userInputText !== '' && <Dropdown />}
    </div>
  );
};

export default Search;
