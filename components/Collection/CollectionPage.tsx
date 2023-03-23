import type { FC, ReactNode } from 'react';
import { Film } from '../../lib/types';
import FilmPanel from '../FilmGrid/FilmPanel';
import { CollectionContainer } from './CollectionContainer';
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
      <CollectionContainer align="start" renderDiv>
        {films.map((film) => (
          <FilmPanel id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </CollectionContainer>
    </div>
  );
};

export default CollectionPage;
