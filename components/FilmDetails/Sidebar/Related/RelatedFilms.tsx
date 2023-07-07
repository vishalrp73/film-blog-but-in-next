import { useState, useEffect, type FC } from 'react';
import { Film } from '@/lib/types';
import { getRelatedFilms } from '@/lib/fetch';
import { ChildrenModule } from '../Generics';
import FilmTile from '@/components/FilmTile';
import * as styles from './RelatedFilms.css';

interface Props {
  filmId: number;
}

const RelatedFilms: FC<Props> = ({ filmId }) => {
  const [relatedFilms, setRelatedFilms] = useState<Film[] | null>(null);

  useEffect(() => {
    getRelatedFilms(filmId)
      .then((res) => setRelatedFilms(res))
      .catch((err) => console.error('blyat', err));
  }, []);

  if (!relatedFilms) return null;

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
};

export default RelatedFilms;
