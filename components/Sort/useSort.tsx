import { useEffect, useState } from 'react';
import { useFilmContext } from '../../context/films';
import { useSortContext } from '../../context/sort';
import {
  sortByYear,
  sortByAlpha,
  getRandomFilm,
  sortByGenre,
  sortByGenreAlpha,
  sortByReviewed,
} from '../../handlers';
import { ButtonType, ButtonOrder } from '../../handlers/types';

export const useSort = () => {
  const { searchedFilms, setSearchedFilms, setGenreSearchedFilms } =
    useFilmContext();
  const {
    yearOrder,
    setYearOrder,
    alphaOrder,
    setAlphaOrder,
    genreOrder,
    setGenreOrder,
  } = useSortContext();
  const filmsByGenre = sortByGenre();
  const reviewedFilms = sortByReviewed();
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
          setAlphaOrder(null);
          setGenreOrder(null);
        }
        if (yearOrder === null || yearOrder === 'desc') {
          setGenreSearchedFilms(null);
          setYearOrder('asc');
          setAlphaOrder(null);
          setGenreOrder(null);
        }
        break;
      case 'alpha':
        if (alphaOrder === 'asc') {
          setGenreSearchedFilms(null);
          setAlphaOrder('desc');
          setYearOrder(null);
          setGenreOrder(null);
        }
        if (alphaOrder === null || alphaOrder === 'desc') {
          setGenreSearchedFilms(null);
          setAlphaOrder('asc');
          setYearOrder(null);
          setGenreOrder(null);
        }
        break;
      case 'genre':
        if (genreOrder === null) {
          setGenreOrder('asc');
          setYearOrder(null);
          setAlphaOrder(null);
        }
        if (genreOrder === 'asc') {
          setGenreOrder('desc');
          setYearOrder(null);
          setAlphaOrder(null);
        }
        if (genreOrder === 'desc') {
          setGenreOrder(null);
          setGenreSearchedFilms(null);
          setYearOrder(null);
          setAlphaOrder(null);
        }
        break;
      case 'reviewed':
        setGenreSearchedFilms(null);
        setSearchedFilms(reviewedFilms);
        setYearOrder(null);
        setAlphaOrder(null);
        setGenreOrder(null);
        break;
      case 'random':
        setGenreSearchedFilms(null);
        setSearchedFilms([randomFilm]);
        setYearOrder(null);
        setAlphaOrder(null);
        setGenreOrder(null);
      default:
        break;
    }
  };

  return {
    getOrder,
    getControllerMethod,
    yearOrder,
    alphaOrder,
    genreOrder,
  };
};
