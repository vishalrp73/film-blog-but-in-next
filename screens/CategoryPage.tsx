import type { FC } from 'react';
import FilmPanel from '../components/FilmGrid/FilmPanel';
import { Film } from '../lib/types';
import * as styles from './CategoryPage.css';

interface Props {
  category: string;
  films: Film[];
}

const CategoryPage: FC<Props> = ({ category, films }) => {
  return (
    <div className={styles.container}>
      <h1>{category}</h1>
      <div className={styles.movieContainer}>
        {films.map((film) => (
          <FilmPanel id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
