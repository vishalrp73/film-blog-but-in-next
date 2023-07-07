import { getFilms, getGenres } from '@/lib/fetch';
import { randomiseStrings } from '@/lib/functions';
import { Film } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genres',
};

export default async function Page() {
  const data: Promise<string[]> = getGenres();
  const filmsData: Promise<Film[]> = getFilms();
  const genres = await data;
  const films = await filmsData;

  return <></>;
}
