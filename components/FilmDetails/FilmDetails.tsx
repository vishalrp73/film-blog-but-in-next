import { FC } from 'react';
import { Film } from '../../lib/types';
import * as styles from './FilmDetails.css';

interface FilmProps {
  film: Film;
}

const FilmDetails: FC<FilmProps> = ({ film }) => {
  return (
    <div className={styles.container}>
      <h1>{film.title}</h1>
    </div>
  );
};

export default FilmDetails;
