import { FC } from 'react';
import { useFilmContext } from '../../context/films';
import Link from 'next/link';

const FilmGrid: FC = () => {
  const [films] = useFilmContext();

  return (
    <>
      {films &&
        films.map((film) => (
          <Link href={`/films/${film.film_id}`}>
            <a>
              <h1 key={film.film_id}>{film.title}</h1>
            </a>
          </Link>
        ))}
    </>
  );
};

export default FilmGrid;
