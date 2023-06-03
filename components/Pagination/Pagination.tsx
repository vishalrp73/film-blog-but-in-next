'use client';

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
  selectedFilms: Film[];
  setSelectedFilms: Dispatch<SetStateAction<Film[]>>;
}

const PageButtons: FC<PageBtn> = ({
  slicedFilms,
  selectedFilms,
  setSelectedFilms,
}) => {
  const handlePagination = (index: number) => {
    setSelectedFilms(slicedFilms[index]);
  };

  return (
    <div className={styles.filterButtons}>
      {slicedFilms.map((f, idx) => (
        <button
          key={idx}
          type="button"
          value={idx}
          onClick={() => handlePagination(idx)}
          className={clsx(styles.filterBtn, {
            [styles.activeBtn]: slicedFilms[idx] === selectedFilms,
          })}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

interface AmountBtn {
  amountNum: number;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const AmountButton: FC<AmountBtn> = ({ amountNum, amount, setAmount }) => {
  return (
    <button
      type="button"
      onClick={() => setAmount(amountNum)}
      className={clsx(styles.filterBtn, {
        [styles.activeBtn]: amountNum === amount,
      })}
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
  }, [films]);

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
          selectedFilms={selectedFilms}
          setSelectedFilms={setSelectedFilms}
        />
        <div className={styles.filterButtons}>
          <AmountButton amountNum={20} amount={amount} setAmount={setAmount} />
          <AmountButton amountNum={50} amount={amount} setAmount={setAmount} />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {selectedFilms.map((film) => (
          <FilmTile film={film} />
        ))}
      </div>
      <div className={clsx(styles.menuContainer, styles.centredButtons)}>
        <PageButtons
          slicedFilms={slicedFilms}
          selectedFilms={selectedFilms}
          setSelectedFilms={setSelectedFilms}
        />
      </div>
    </div>
  );
};

export default Pagination;
