'use client';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Film } from '@/lib/types';
import { getRelatedFilms } from '@/lib/fetch';
import { ChildrenModule } from '../Module';
import FilmTile from '@/components/FilmTile/FilmTile';
import * as styles from './RelatedFilms.css';

const RelatedFilms: FC<{ filmId: number }> = ({ filmId }) => {
  const [relatedFilms, setRelatedFilms] = useState<Film[] | null>(null);

  useEffect(() => {
    getRelatedFilms(filmId)
      .then((res) => setRelatedFilms(res))
      .catch((err) => console.error('blyat', err));
  }, []);

  if (relatedFilms) {
    return (
      <ChildrenModule>
        <div className={styles.container}>
          <h3 className={styles.heading}>Similar films</h3>
          {relatedFilms.map((film) => (
            <FilmTile key={film.film_id} film={film} noAnimations />
          ))}
        </div>
      </ChildrenModule>
    );
  }

  return null;
};

export default RelatedFilms;
