import { getFilms, getGenre } from '@/lib/fetch';
import { Film } from '@/lib/types';

type Params = {
  params: {
    genre: string;
  };
};

export default async function Page({ params: { genre } }: Params) {
  const data: Promise<Film[]> = getGenre(genre);
  const films = await Promise.resolve(data);
  const filmsData: Promise<Film[]> = getFilms();
  const movies = await Promise.resolve(filmsData);

  return <></>;
}
