import { FC } from 'react';
import Link from 'next/link';
import { useFilmContext } from '../../context/films';
import * as styles from './Dropdown.css';

const Dropdown: FC = () => {
  const [films] = useFilmContext();

  return (
    <div className={styles.container}>
      {films &&
        films.map((film) => (
          <Link href={`/films/${film.film_id}`}>
            <a className={styles.filmPanel}>
              <h1>{film.title}</h1>
              <p>{film.year}</p>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Dropdown;
