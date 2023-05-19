'use client';
import { useState } from 'react';
import { useSearchContext } from '@/context/search';
import { Film } from '../types';
import Fuse from 'fuse.js';

export const useSearch = (films: Film[]) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const { searchedFilms, setSearchedFilms } = useSearchContext();

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

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = fuseSearch.search(term).map(({ item }) => item);
    setSearchedFilms([...filtered]);
    console.log('useSearch', searchedFilms);
  };

  return {
    searchTerm,
    handleSearch,
  };
};
