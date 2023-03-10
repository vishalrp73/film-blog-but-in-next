import type { FC, ReactNode } from 'react';
import { Film } from '../../lib/types';
import FilmPanel from '../FilmGrid/FilmPanel';
import HeaderMiniSearch from '../Header/HeaderMiniSearch';
import * as styles from './CollectionPage.css';

interface Props {
  heading: string;
  films: Film[];
}

const CollectionPage: FC<Props> = ({ heading, films }) => {
  return (
    <div className={styles.container}>
      <HeaderMiniSearch heading={heading} />
      <div className={styles.filmsContainer}>
        {films.map((film) => (
          <FilmPanel id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
