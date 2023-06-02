import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Film } from '@/lib/types';
import FilmTile from '../FilmTile/FilmTile';
import * as styles from './Pagination.css';

const sliceFilms = (films: Film[], splitSize: number) => {
  const numberOfPages = Math.ceil(films.length / splitSize);
  return Array.from({ length: numberOfPages }, (v, index) =>
    films.slice(index * splitSize, index * splitSize + splitSize),
  );
};

interface PageBtn {
  slicedFilms: Film[][];
  setSelectedFilms: Dispatch<SetStateAction<Film[]>>;
  centred?: boolean;
}

const PageButtons: FC<PageBtn> = ({
  slicedFilms,
  setSelectedFilms,
  centred,
}) => {
  const handlePagination = (index: number) => {
    setSelectedFilms(slicedFilms[index]);
  };

  return (
    <div className={styles.filterButtons}>
      {slicedFilms.map((f, idx) => (
        <button
          type="button"
          value={idx}
          onClick={() => handlePagination(idx)}
          className={styles.filterBtn}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

interface AmountBtn {
  amountNum: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const AmountButton: FC<AmountBtn> = ({ amountNum, setAmount }) => {
  return (
    <button
      type="button"
      onClick={() => setAmount(amountNum)}
      className={styles.filterBtn}
    >
      {amountNum}
    </button>
  );
};

const Pagination: FC<{ films: Film[] }> = ({ films }) => {
  const [amount, setAmount] = useState<number>(20);
  const [slicedFilms, setSlicedFilms] = useState<Film[][]>(
    sliceFilms(films, amount),
  );
  const [selectedFilms, setSelectedFilms] = useState<Film[]>(slicedFilms[0]);

  useEffect(() => {
    setSlicedFilms(sliceFilms(films, amount));
  }, [amount]);

  useEffect(() => {
    setSelectedFilms(slicedFilms[0]);
  }, [slicedFilms]);

  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <PageButtons
          slicedFilms={slicedFilms}
          setSelectedFilms={setSelectedFilms}
        />
        <div className={styles.filterButtons}>
          <AmountButton amountNum={20} setAmount={setAmount} />
          <AmountButton amountNum={50} setAmount={setAmount} />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {selectedFilms.map((film) => (
          <FilmTile id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </div>
      <div className={clsx(styles.menuContainer, styles.centredButtons)}>
        <PageButtons
          slicedFilms={slicedFilms}
          setSelectedFilms={setSelectedFilms}
          centred
        />
      </div>
    </div>
  );
};

export default Pagination;
