import { Film } from '@/lib/types';
import { getCategory } from '@/lib/fetch';
import FilmsCategory from '@/components/CategoryPage/FilmsCategory';

type Params = {
  params: {
    category: string;
  };
};

export default async function Category({ params: { category } }: Params) {
  const data: Promise<Film[]> = getCategory(category);
  const films = await Promise.resolve(data);

  return <FilmsCategory films={films} title={category} />;
}
