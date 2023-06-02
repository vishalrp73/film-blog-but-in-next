import CategoryPage from '@/components/CategoryPage/CategoryPage';
import { getCategories, getFilms } from '@/lib/fetch';
import { randomiseStrings } from '@/lib/functions';
import { Film } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'categories',
};

export default async function Page() {
  const data: Promise<string[]> = getCategories();
  const filmsData: Promise<Film[]> = getFilms();
  const categories = await data;
  const films = await filmsData;

  return (
    <CategoryPage
      films={films}
      categories={randomiseStrings(categories)}
      route="categories"
      headerTitle="CATEGORIES"
    />
  );
}
