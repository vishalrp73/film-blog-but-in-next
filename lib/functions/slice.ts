import { Film } from '../types';

export const sliceFilms = (films: Film[], splitSize: number) => {
  const numberOfPages = Math.ceil(films.length / splitSize);
  return Array.from({ length: numberOfPages }, (v, index) =>
    films.slice(index * splitSize, index * splitSize + splitSize),
  );
};
