import type { FC } from 'react';
import Link from 'next/link';
import { useFilmContext } from '../../context/films';
import * as styles from './Dropdown.css';

const Dropdown: FC = () => {
  const { searchedFilms } = useFilmContext();

  return (
    <div className={styles.container}>
      {searchedFilms &&
        searchedFilms.map((film) => (
          <Link href={`/films/${film.film_id}`}>
            <a className={styles.filmPanel}>
              <h3>{film.title}</h3>
              <p>{film.year}</p>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Dropdown;
