import { Film, ButtonOrder } from '../types';

export const sortByYear = (films: Film[], order: ButtonOrder): Film[] => {
  const sort = films.sort((a, b) => a.year - b.year);
  if (order === 'asc') return sort.reverse();
  if (order === 'desc') return sort;
  return films;
};

export const sortByAlpha = (films: Film[], order: ButtonOrder): Film[] => {
  const sort = films.sort((a, b) => a.title.localeCompare(b.title));
  if (order === 'asc') return sort;
  if (order === 'desc') return sort.reverse();
  return films;
};
