import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useFilmContext } from '../../context/films';
import { yearSort, alphaSort, getButtonValue } from '../../handlers/sort';
import * as style from './Sort.css';

interface SortProps {
  type: 'year' | 'alpha';
}

const Sort: FC<SortProps> = ({ type }) => {
  const [films, setFilms] = useFilmContext();
  const [yearOrder, setYearOrder] = useState<'asc' | 'desc' | null>(null);
  const [alphaOrder, setAlphaOrder] = useState<'asc' | 'desc' | null>(null);

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

  const yearController = () => {
    if (yearOrder === 'asc') setYearOrder('desc');
    if (yearOrder === null || yearOrder === 'desc') setYearOrder('asc');
  };

  const alphaController = () => {
    if (alphaOrder === 'asc') setAlphaOrder('desc');
    if (alphaOrder === null || alphaOrder === 'desc') setAlphaOrder('asc');
  };

  return (
    <input
      type="button"
      className={clsx({
        [style.yearBtnContainer]: type === 'year',
        [style.alphaBtnContainer]: type === 'alpha',
      })}
      value={getButtonValue(type === 'year' ? yearOrder : alphaOrder, type)}
      onClick={() => (type === 'year' ? yearController() : alphaController())}
    />
  );
};

export default Sort;
