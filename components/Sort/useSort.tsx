import { useEffect, useState } from 'react';
import { useFilmContext } from '../../context/films';
import {
  sortByYear,
  sortByAlpha,
  getRandomFilm,
  sortByGenre,
} from '../../handlers';
import { ButtonType, ButtonOrder } from '../../handlers/types';

export const useSort = () => {
  const { searchedFilms, setSearchedFilms } = useFilmContext();
  const [yearOrder, setYearOrder] = useState<ButtonOrder>(null);
  const [alphaOrder, setAlphaOrder] = useState<ButtonOrder>(null);
  const randomFilm = getRandomFilm();
  const genres = sortByGenre();
  console.log(genres);

  useEffect(() => {
    if (yearOrder === null) return;
    const sorted = sortByYear(yearOrder, searchedFilms);
    setSearchedFilms([...sorted]);
  }, [yearOrder]);

  useEffect(() => {
    if (alphaOrder === null) return;
    const sorted = sortByAlpha(alphaOrder, searchedFilms);
    setSearchedFilms([...sorted]);
  }, [alphaOrder]);

  const getOrder = (type: ButtonType): ButtonOrder => {
    if (type === 'year') return yearOrder;
    if (type === 'alpha') return alphaOrder;
    return null;
  };

  const getControllerMethod = (type: ButtonType): void => {
    switch (type) {
      case 'year':
        if (yearOrder === 'asc') setYearOrder('desc');
        if (yearOrder === null || yearOrder === 'desc') {
          setYearOrder('asc');
        }
        break;
      case 'alpha':
        if (alphaOrder === 'asc') setAlphaOrder('desc');
        if (alphaOrder === null || alphaOrder === 'desc') {
          setAlphaOrder('asc');
        }
        break;
      case 'random':
        setSearchedFilms([randomFilm]);
      default:
        break;
    }
  };

  return {
    getOrder,
    getControllerMethod,
  };
};
