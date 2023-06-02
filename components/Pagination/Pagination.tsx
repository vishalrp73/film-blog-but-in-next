import { FC, useEffect } from 'react';
import { useState } from 'react';
import { Film } from '@/lib/types';
import FilmTile from '../FilmTile/FilmTile';

const amounts = [20, 25, 50];

const sliceFilms = (films: Film[], splitSize: number) => {
  const numberOfPages = Math.ceil(films.length / splitSize);
  return Array.from({ length: numberOfPages }, (v, index) =>
    films.slice(index * splitSize, index * splitSize + splitSize),
  );
};

const Pagination: FC<{ films: Film[] }> = ({ films }) => {
  const [amount, setAmount] = useState<number>(20);
  const [slicedFilms, setSlicedFilms] = useState<Film[][]>(
    sliceFilms(films, amount),
  );
  const [selectedFilms, setSelectedFilms] = useState<Film[]>(slicedFilms[0]);

  const handlePagination = (index: number) => {
    setSelectedFilms(slicedFilms[index]);
  };

  useEffect(() => {
    setSlicedFilms(sliceFilms(films, amount));
  }, [amount]);

  useEffect(() => {
    setSelectedFilms(slicedFilms[0]);
  }, [slicedFilms]);

  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        {slicedFilms.map((films, index) => (
          <button
            type="button"
            value={index}
            onClick={() => handlePagination(index)}
          >
            page {index + 1}
          </button>
        ))}
        <button type="button" onClick={() => setAmount(20)}>
          20
        </button>
        <button type="button" onClick={() => setAmount(50)}>
          50
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {selectedFilms.map((film) => (
          <FilmTile id={film.film_id} thumbnail={film.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
