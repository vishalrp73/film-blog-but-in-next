import type { FC } from 'react';
import Image from 'next/image';
import { useFilmContext } from '../../context/films';
import { useSortContext } from '../../context/sort';
import ResetIcon from '../../lib/img/reset-icon.png';
import * as styles from './ResetButton.css';

export const ResetButton: FC = () => {
  const { films, setSearchTerm, setSearchedFilms, setGenreSearchedFilms } =
    useFilmContext();
  const { setYearOrder, setAlphaOrder, setGenreOrder } = useSortContext();

  const handleReset = () => {
    setSearchTerm('');
    setSearchedFilms(films);
    setGenreSearchedFilms(null);
    setYearOrder(null);
    setAlphaOrder(null);
    setGenreOrder(null);
  };

  return (
    <button className={styles.resetBtn} onClick={handleReset}>
      <Image src={ResetIcon} />
    </button>
  );
};
