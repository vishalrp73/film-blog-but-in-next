'use client';
import type { FC, ReactNode } from 'react';
import { SearchProvider } from '@/context/search';
import { useFilms } from '@/lib/hooks/useFilms';
import { Film } from '@/lib/types';
import SearchSort from '../SearchSort/SearchSort';
import FilmGrid from '../FilmGrid/FilmGrid';

const Home: FC<{ movies: Film[]; children: ReactNode }> = ({
  movies,
  children,
}) => {
  const { films } = useFilms(movies);

  return (
    <SearchProvider>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SearchSort films={films ?? []} />
        <FilmGrid films={films ?? []} />
      </div>
      {children}
    </SearchProvider>
  );
};

export default Home;
