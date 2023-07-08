import type { Metadata } from 'next';
import { Artists, Film } from '@/lib/types';
import { getArtists, getFilms } from '@/lib/fetch';
import { ArtistsPage } from '@/screens';
import { jumbleArtistStrings } from '@/lib/functions';

export const metadata: Metadata = {
  title: 'Artists',
};

export default async function Page() {
  const data: Promise<Artists> = getArtists();
  const filmsData: Promise<Film[]> = getFilms();
  const artists = await data;
  const films = await filmsData;
  const randomisedArtists = jumbleArtistStrings(artists);

  return (
    <>
      <ArtistsPage films={films} artists={randomisedArtists} />
    </>
  );
}
