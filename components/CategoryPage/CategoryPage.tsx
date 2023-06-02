import type { FC } from 'react';
import { Categories, Film } from '@/lib/types';
import FixedHeader from '../FixedHeader/FixedHeader';
import CategoryLink from '../CatgegoryLink/CategoryLink';
import * as styles from './CategoryPage.css';

interface Props {
  films: Film[];
  categories: string[];
  route: Categories;
  headerTitle?: string;
}

const CategoryPage: FC<Props> = ({ films, categories, route, headerTitle }) => {
  return (
    <section>
      <FixedHeader films={films} title={headerTitle} />
      <div className={styles.container}>
        {categories.map((category) => (
          <CategoryLink route={route} content={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
