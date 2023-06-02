import CategoryPage from '@/components/CategoryPage/CategoryPage';
import { getArtists, getFilms } from '@/lib/fetch';
import { randomiseStrings } from '@/lib/functions';
import { Film } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artists',
};

export default async function Page() {
  const data: Promise<string[]> = getArtists();
  const filmsData: Promise<Film[]> = getFilms();
  const artists = await data;
  const films = await filmsData;

  return (
    <CategoryPage
      films={films}
      categories={randomiseStrings(artists)}
      route="artists"
      headerTitle="ARTISTS"
    />
  );
}
