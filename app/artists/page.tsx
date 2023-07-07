import { getArtists, getFilms } from '@/lib/fetch';
import { Artists, Film } from '@/lib/types';
import type { Metadata } from 'next';

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
    </>
  );
}
