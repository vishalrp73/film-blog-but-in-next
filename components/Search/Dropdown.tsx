import type { Dispatch, FC, SetStateAction } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useFilmContext } from '../../context/films';
import * as styles from './Dropdown.css';
import { highOpacityTranslucent } from '../../styles/translucent.css';
import { Film } from '../../lib/types';

interface Props {
  setPopup: Dispatch<SetStateAction<boolean>>;
  setHighlightedFilm: Dispatch<SetStateAction<Film | null>>;
}

const Dropdown: FC<Props> = ({ setPopup, setHighlightedFilm }) => {
  const { searchedFilms } = useFilmContext();

  const handleMouseOver = (film: Film) => {
    setPopup(true);
    setHighlightedFilm(film);
  };

  const handleMouseOut = () => {
    setPopup(false);
    setHighlightedFilm(null);
  };

  return (
    <div className={styles.completeContainer}>
      <div className={clsx(styles.container, highOpacityTranslucent)}>
        {searchedFilms &&
          searchedFilms.map((film) => (
            <div
              onMouseOver={() => handleMouseOver(film)}
              onMouseOut={handleMouseOut}
            >
              <Link href={`/films/${film.film_id}`}>
                <a className={styles.filmPanel}>
                  <h3>{film.title}</h3>
                  <p>{film.year}</p>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
