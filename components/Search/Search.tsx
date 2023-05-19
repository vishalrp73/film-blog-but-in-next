'use client';
import type { FC } from 'react';
import { useSearch } from '@/lib/hooks/useSearch';
import { Film } from '@/lib/types';

const Search: FC<{ films: Film[] }> = ({ films }) => {
  const { handleSearch } = useSearch(films);

  return <input type="text" onChange={(e) => handleSearch(e.target.value)} />;
};

export default Search;
