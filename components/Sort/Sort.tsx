import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useFilmContext } from '../../context/films';
import {
  yearSort,
  alphaSort,
  getRandomFilm,
  getButtonValue,
} from '../../handlers/sort';
import * as styles from './Sort.css';

interface SortProps {
  type: 'year' | 'alpha' | 'random';
}

type SortOrder = 'asc' | 'desc' | null;

const Sort: FC<SortProps> = ({ type }) => {
  const [films, setFilms] = useFilmContext();
  const [yearOrder, setYearOrder] = useState<SortOrder>(null);
  const [alphaOrder, setAlphaOrder] = useState<SortOrder>(null);

  useEffect(() => {
    if (yearOrder) {
      const sorted = yearSort(yearOrder, films);
      setFilms([...sorted]);
    }
  }, [yearOrder]);

  useEffect(() => {
    if (alphaOrder) {
      const sorted = alphaSort(alphaOrder, films);
      setFilms([...sorted]);
    }
  }, [alphaOrder]);

  const feelingLucky = async () => {
    const film = await getRandomFilm();
    setFilms([film]);
  };

  const yearController = () => {
    if (yearOrder === 'asc') setYearOrder('desc');
    if (yearOrder === null || yearOrder === 'desc') setYearOrder('asc');
  };

  const alphaController = () => {
    if (alphaOrder === 'asc') setAlphaOrder('desc');
    if (alphaOrder === null || alphaOrder === 'desc') setAlphaOrder('asc');
  };

  const getOrder = ({ type }: SortProps): SortOrder => {
    if (type === 'year') return yearOrder;
    if (type === 'alpha') return alphaOrder;
    return null;
  };

  const getControllerMethod = ({ type }: SortProps) => {
    if (type === 'year') return yearController();
    if (type === 'alpha') return alphaController();
    if (type === 'random') return feelingLucky();
  };

  return (
    <input
      type="button"
      className={clsx(styles.btnContainer, {
        [styles.yearBtnContainer]: type === 'year',
        [styles.alphaBtnContainer]: type === 'alpha',
        [styles.randomFilmContainer]: type === 'random',
      })}
      value={getButtonValue(type, getOrder({ type }))}
      onClick={() => getControllerMethod({ type })}
    />
  );
};

export default Sort;
