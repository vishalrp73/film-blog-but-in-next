'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { Film } from '../types';

type FilmsHook = { films?: Film[]; setFilms: Dispatch<SetStateAction<Film[]>> };

export const useFilms = (movies: Film[]): FilmsHook => {
  const [films, setFilms] = useState<Film[]>(movies);

  return {
    films,
    setFilms,
  };
};
