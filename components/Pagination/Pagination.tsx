'use client';
import { useState, useMemo, type FC } from 'react';
import clsx from 'clsx';
import { Film } from '@/lib/types';
import { sliceFilms } from '@/lib/functions/slice';
import FilmTile from '../FilmTile';
import { AmountButton, PageButtons } from './Buttons';
import * as styles from './Pagination.css';

interface Props {
  films: Film[];
}

const Pagination: FC<Props> = ({ films }) => {
  const [amount, setAmount] = useState<number>(20);
  const [slicedFilms, setSlicedFilms] = useState<Film[][]>(
    sliceFilms(films, amount),
  );
  const [selectedFilms, setSelectedFilms] = useState<Film[]>(slicedFilms[0]);

  useMemo(() => {
    setSlicedFilms(sliceFilms(films, amount));
  }, [films, amount]);

  useMemo(() => {
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
        {selectedFilms &&
          selectedFilms.map((film) => (
            <FilmTile film={film} key={film.film_id} />
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
