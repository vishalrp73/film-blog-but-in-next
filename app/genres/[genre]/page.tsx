import { Film } from '@/lib/types';
import { getFilms, getGenre } from '@/lib/fetch';
import { FilmsCategory } from '@/screens';

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

  return <FilmsCategory allFilms={movies} films={films} title={genre} />;
}
