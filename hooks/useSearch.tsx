import { useEffect, Dispatch, SetStateAction } from 'react';
import Fuse from 'fuse.js';
import { randomiseFilms } from '../handlers/sort';
import { useFilmContext } from '../context/films';
import { Film } from '../lib/types';

export const useSearch = (
  searchTerm: string,
): [Film[], Dispatch<SetStateAction<Film[]>>] => {
  const [films, setFilms] = useFilmContext();
  const fuseSearch = new Fuse(films, {
    keys: [
      'title',
      'director',
      'year',
      'writers',
      'genre',
      'cinematography',
      'soundtrack',
      'blurb',
      'tags',
      'trivia',
      'review_text',
      'review_score',
      'special_category',
    ],
    includeScore: true,
    threshold: 0.3,
    ignoreLocation: true,
  });

  useEffect(() => {
    if (searchTerm === '') {
      fetch('http://localhost:4000/films')
        .then((res) => res.json())
        .then((data) => {
          const randomised = randomiseFilms(data);
          setFilms([...randomised]);
        })
        .catch((err) => console.log('fuck', err));
    }

    if (searchTerm) {
      const filtered = fuseSearch.search(searchTerm).map(({ item }) => item);
      setFilms(filtered);
    }
  }, [searchTerm]);

  return [films, setFilms];
};
