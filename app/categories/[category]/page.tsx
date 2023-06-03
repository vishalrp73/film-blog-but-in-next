import { Film } from '@/lib/types';
import { getCategory, getFilms } from '@/lib/fetch';
import FilmsCategory from '@/components/CategoryPage/FilmsCategory';

type Params = {
  params: {
    category: string;
  };
};

export default async function Category({ params: { category } }: Params) {
  const data: Promise<Film[]> = getCategory(category);
  const filmsData: Promise<Film[]> = getFilms();
  const films = await Promise.resolve(data);
  const movies = await Promise.resolve(filmsData);

  return <FilmsCategory allFilms={movies} films={films} title={category} />;
}
