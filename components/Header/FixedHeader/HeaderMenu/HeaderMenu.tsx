'use client';
import { type FC } from 'react';
import { SearchProvider } from '@/context/search';
import { useToggle } from '@/lib/hooks';
import { Film } from '@/lib/types';
import { HomeButton } from '@/components/Buttons';
import { MiniSearch } from '@/components/Search';
import { container } from './HeaderMenu.css';

interface Props {
  films: Film[];
}

const HeaderMenu: FC<Props> = ({ films }) => {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div className={container}>
      <HomeButton />
      <SearchProvider>
        <MiniSearch films={films} toggle={toggle} setToggle={setToggle} />
      </SearchProvider>
    </div>
  );
};

export default HeaderMenu;
