'use client';
import { useEffect, useState } from 'react';
import { useSearchContext } from '@/context/search';
import { Film } from '../types';
import Fuse from 'fuse.js';

const fuseKeys = [
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
];

export const useSearch = (films: Film[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { setSearchedFilms } = useSearchContext();

  const fuseSearch = new Fuse(films, {
    keys: fuseKeys,
    includeScore: true,
    threshold: 0.3,
    ignoreLocation: true,
  });

  useEffect(() => {
    const filtered = fuseSearch.search(searchTerm).map(({ item }) => item);
    setSearchedFilms([...filtered]);
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    handleClear,
  };
};
