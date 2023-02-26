import { useEffect, useState } from 'react';
import { useFilmContext } from '../../context/films';
import {
  sortByYear,
  sortByAlpha,
  getRandomFilm,
  sortByGenre,
  sortByGenreAlpha,
} from '../../handlers';
import { ButtonType, ButtonOrder } from '../../handlers/types';

export const useSort = () => {
  const { searchedFilms, setSearchedFilms, setGenreSearchedFilms } =
    useFilmContext();
  const [yearOrder, setYearOrder] = useState<ButtonOrder>(null);
  const [alphaOrder, setAlphaOrder] = useState<ButtonOrder>(null);
  const [genreOrder, setGenreOrder] = useState<ButtonOrder>(null);
  const filmsByGenre = sortByGenre();
  const randomFilm = getRandomFilm();

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

  useEffect(() => {
    if (genreOrder === null) return;
    const sorted = sortByGenreAlpha(genreOrder, filmsByGenre);
    setGenreSearchedFilms(sorted);
  }, [genreOrder]);

  const getOrder = (type: ButtonType): ButtonOrder => {
    if (type === 'year') return yearOrder;
    if (type === 'alpha') return alphaOrder;
    if (type === 'genre') return genreOrder;
    return null;
  };

  const getControllerMethod = (type: ButtonType): void => {
    switch (type) {
      case 'year':
        if (yearOrder === 'asc') {
          setGenreSearchedFilms(null);
          setYearOrder('desc');
        }
        if (yearOrder === null || yearOrder === 'desc') {
          setGenreSearchedFilms(null);
          setYearOrder('asc');
        }
        break;
      case 'alpha':
        if (alphaOrder === 'asc') {
          setGenreSearchedFilms(null);
          setAlphaOrder('desc');
        }
        if (alphaOrder === null || alphaOrder === 'desc') {
          setGenreSearchedFilms(null);
          setAlphaOrder('asc');
        }
        break;
      case 'genre':
        if (genreOrder === null) {
          setGenreOrder('asc');
        }
        if (genreOrder === 'asc') {
          setGenreOrder('desc');
        }
        if (genreOrder === 'desc') {
          setGenreOrder(null);
          setGenreSearchedFilms(null);
        }
        break;
      case 'random':
        setGenreSearchedFilms(null);
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
