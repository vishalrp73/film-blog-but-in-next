import type { Metadata } from 'next';
import { Film } from '@/lib/types';
import { getFilms } from '@/lib/fetch';
import { randomiseFilms } from '@/lib/functions';
import { FilmsCategory } from '@/screens';

export const metadata: Metadata = {
  title: 'Films',
};

export default async function Page() {
  const data: Promise<Film[]> = getFilms();
  const films = await data;

  return (
    <FilmsCategory
      allFilms={films}
      films={randomiseFilms(films)}
      title="ALL MOVIES"
    />
  );
}
