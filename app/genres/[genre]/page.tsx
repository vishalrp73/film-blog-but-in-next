import FilmsCategory from '@/components/CategoryPage/FilmsCategory';
import { getGenre } from '@/lib/fetch';
import { Film } from '@/lib/types';

type Params = {
  params: {
    genre: string;
  };
};

export default async function Page({ params: { genre } }: Params) {
  const data: Promise<Film[]> = getGenre(genre);
  const films = await Promise.resolve(data);

  return <FilmsCategory films={films} title={genre} />;
}
