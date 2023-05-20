'use client';
import type { FC } from 'react';
import { SearchProvider } from '@/context/search';
import MiniSearch from '../Search/MinISearch';
import useToggle from '@/lib/hooks/useToggle';
import { Film } from '@/lib/types';

interface Props {
  films: Film[];
}

const FilmDetails: FC<Props> = ({ films }) => {
  const [toggle, setToggle] = useToggle();
  return (
    <SearchProvider>
      <div>
        <MiniSearch films={films} toggle={toggle} setToggle={setToggle} />
      </div>
    </SearchProvider>
  );
};

export default FilmDetails;
