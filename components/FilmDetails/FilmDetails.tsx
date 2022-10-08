import { FC } from 'react';
import { Film } from '../../lib/types';

interface FilmProps {
  film: Film;
}

const FilmDetails: FC<FilmProps> = ({ film }) => {
  return <h1>{film.title}</h1>;
};

export default FilmDetails;
