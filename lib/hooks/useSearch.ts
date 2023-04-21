import { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { randomiseFilms } from '../../handlers/sort';
import { useFilmContext } from '../../context/films';
import Fuse from 'fuse.js';

export const useSearch = (searchTerm: string): void => {
  const { films, setSearchedFilms } = useFilmContext();
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

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const filtered = fuseSearch.search(searchTerm).map(({ item }) => item);
    setSearchedFilms([...filtered]);
  }, 200);

  useEffect(() => {
    if (searchTerm.length === 0) {
      const shuffledFilms = randomiseFilms(films);
      setSearchedFilms([...shuffledFilms]);
    }

    if (searchTerm.length > 0) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);
};
