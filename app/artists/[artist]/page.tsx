import { Film } from '@/lib/types';
import { getArtist, getFilms } from '@/lib/fetch';

type Params = {
  params: {
    artist: string;
  };
};

export default async function Artist({ params: { artist } }: Params) {
  const data: Promise<Film[]> = getArtist(artist);
  const films = await Promise.resolve(data);
  const filmsData: Promise<Film[]> = getFilms();
  const movies = await Promise.resolve(filmsData);

  return <></>;
}
