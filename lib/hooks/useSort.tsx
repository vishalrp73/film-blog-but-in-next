import { useSearchContext } from '@/context/search';
import { getRandomFilm, sortByYear, sortByAlpha } from '../functions';
import { ButtonOrder, ButtonType, Film } from '../types';
import { useEffect, useState } from 'react';

export const useSort = (films: Film[]) => {
  const { searchedFilms, setSearchedFilms } = useSearchContext();

  const [yearOrder, setYearOrder] = useState<ButtonOrder>(null);
  const [alphaOrder, setAlphaOrder] = useState<ButtonOrder>(null);

  useEffect(() => {
    if (yearOrder === null) return;
    const targetFilms = searchedFilms.length > 0 ? searchedFilms : films;
    const sorted = sortByYear(targetFilms, yearOrder);
    setSearchedFilms([...sorted]);
  }, [yearOrder]);

  useEffect(() => {
    if (alphaOrder === null) return;
    const targetFilms = searchedFilms.length > 0 ? searchedFilms : films;
    const sorted = sortByAlpha(targetFilms, alphaOrder);
    setSearchedFilms([...sorted]);
  }, [alphaOrder]);

  const handleSort = (type: ButtonType): void => {
    switch (type) {
      case 'year':
        if (yearOrder === 'asc') {
          setYearOrder('desc');
          setAlphaOrder(null);
        }
        if (yearOrder === null || yearOrder === 'desc') {
          setYearOrder('asc');
          setAlphaOrder(null);
        }
        break;
      case 'alpha':
        if (alphaOrder === 'asc') {
          setAlphaOrder('desc');
          setYearOrder(null);
        }
        if (alphaOrder === null || alphaOrder === 'desc') {
          setAlphaOrder('asc');
          setYearOrder(null);
        }
        break;
      case 'random':
        const randomFilm = getRandomFilm(films);
        setSearchedFilms([randomFilm]);
        break;
      default:
        break;
    }
  };

  return {
    handleSort,
    yearOrder,
    setYearOrder,
    alphaOrder,
    setAlphaOrder,
  };
};
