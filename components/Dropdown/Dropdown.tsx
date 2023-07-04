import type { Dispatch, FC, SetStateAction } from 'react';
import { useSearchContext } from '@/context/search';
import { Film } from '../../lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import { highOpacityTranslucent } from '../../styles/translucent.css';
import { hideScrollbar } from '@/styles/scroll.css';
import * as styles from './Dropdown.css';

interface Props {
  setPopup: Dispatch<SetStateAction<boolean>>;
  setHighlightedFilm: Dispatch<SetStateAction<Film | null>>;
}

const Dropdown: FC<Props> = ({ setPopup, setHighlightedFilm }) => {
  const { searchedFilms } = useSearchContext();

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
      <div
        className={clsx(
          styles.container,
          highOpacityTranslucent,
          hideScrollbar,
        )}
      >
        {searchedFilms &&
          searchedFilms.map((film) => (
            <div
              key={film.film_id}
              onMouseOver={() => handleMouseOver(film)}
              onMouseOut={handleMouseOut}
            >
              <Link key={film.film_id} href={`/films/${film.film_id}`}>
                <div key={film.film_id} className={styles.filmPanel}>
                  <h3>{film.title}</h3>
                  <p>{film.year}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
