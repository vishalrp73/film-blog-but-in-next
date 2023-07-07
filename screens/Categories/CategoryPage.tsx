import { type FC } from 'react';
import { Categories, Film } from '@/lib/types';
import { CategoryLink } from '@/components/Links';
import { FixedHeader } from '@/components/Header';
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
