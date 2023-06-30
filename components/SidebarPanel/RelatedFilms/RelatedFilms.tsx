'use client';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { searchRelatedFilms } from '@/lib/related/relatedFilms';
import { ChildrenModule } from '../Module';
import FilmTile from '@/components/FilmTile/FilmTile';
import { Film } from '@/lib/types';
import * as styles from './RelatedFilms.css';

const RelatedFilms: FC<{ title: string }> = ({ title }) => {
  const [relatedFilms, setRelatedFilms] = useState<Film[] | null>(null);

  useEffect(() => {
    searchRelatedFilms(title)
      .then((r) => {
        if (r === undefined) return;
        setRelatedFilms(r);
      })
      .catch((err) => console.error('blyat', err));
  }, []);

  if (relatedFilms) {
    return (
      <ChildrenModule className={styles.maxHeight}>
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
