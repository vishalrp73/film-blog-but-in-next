import FilmsCategory from '@/components/CategoryPage/FilmsCategory';
import { getFilms } from '@/lib/fetch';
import { randomiseFilms } from '@/lib/functions';
import { Film } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Films',
};

export default async function Page() {
  const data: Promise<Film[]> = getFilms();
  const films = await data;

  return <FilmsCategory films={randomiseFilms(films)} title="ALL MOVIES" />;
}
