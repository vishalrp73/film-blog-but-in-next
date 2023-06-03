'use client';
import { SearchProvider } from '@/context/search';
import useToggle from '@/lib/hooks/useToggle';
import { Film } from '@/lib/types';
import type { FC } from 'react';
import HomeButton from '../Buttons/HomeButton/HomeButton';
import MiniSearch from '../Search/MinISearch';
import * as styles from './HeaderMenu.css';

interface Props {
  films: Film[];
}

const HeaderMenu: FC<Props> = ({ films }) => {
  const [toggle, setToggle] = useToggle();
  return (
    <div className={styles.btnContainer}>
      <HomeButton />
      <SearchProvider>
        <MiniSearch films={films} toggle={toggle} setToggle={setToggle} />
      </SearchProvider>
    </div>
  );
};

export default HeaderMenu;
