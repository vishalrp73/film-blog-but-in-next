import type { Metadata } from 'next';
import { Film } from '@/lib/types';
import { getFilms, getGenres } from '@/lib/fetch';
import { randomiseStrings } from '@/lib/functions';
import { CategoryPage } from '@/screens';

export const metadata: Metadata = {
  title: 'Genres',
};

export default async function Page() {
  const data: Promise<string[]> = getGenres();
  const filmsData: Promise<Film[]> = getFilms();
  const genres = await data;
  const films = await filmsData;

  return (
    <CategoryPage
      films={films}
      categories={randomiseStrings(genres)}
      route="genres"
      headerTitle="GENRES"
    />
  );
}
