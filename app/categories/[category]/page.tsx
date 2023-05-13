import { Film } from '@/lib/types';
import { getCategory } from '@/lib/fetch';

type Params = {
  params: {
    category: string;
  };
};

export default async function Category({ params: { category } }: Params) {
  const data: Promise<Film[]> = getCategory(category);
  const films = await Promise.resolve(data);

  return films.map((film) => <h1 style={{ color: 'white' }}>{film.title}</h1>);
}
