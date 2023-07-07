import type { Metadata } from 'next';
import { Artists, Film } from '@/lib/types';
import { getArtists, getFilms } from '@/lib/fetch';
import { ArtistsPage } from '@/screens';

export const metadata: Metadata = {
  title: 'Artists',
};

export default async function Page() {
  const data: Promise<Artists> = getArtists();
  const filmsData: Promise<Film[]> = getFilms();
  const artists = await data;
  const films = await filmsData;
  return (
    <>
      <h1>Testing Aritsts page</h1>
      <p>testing</p>
      <ArtistsPage films={films} artists={artists} />
    </>
  );
}
