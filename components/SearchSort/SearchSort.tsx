import type { FC } from 'react';
import { useSearchContext } from '@/context/search';
import { useSearch } from '@/lib/hooks/useSearch';
import { useSort } from '@/lib/hooks/useSort';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Reset from '../Reset/Reset';
import { Film } from '@/lib/types';
import { getRandomFilm } from '@/lib/functions';

const SearchSort: FC<{ films: Film[] }> = ({ films }) => {
  const { searchTerm, setSearchTerm, handleClear } = useSearch(films);
  const { handleSort, yearOrder, setYearOrder, alphaOrder, setAlphaOrder } =
    useSort(films);
  const randomFilm = getRandomFilm(films);

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        randomFilm={randomFilm}
      />
      <Sort
        type="year"
        order={yearOrder}
        handleSort={() => handleSort('year')}
      />
      <Sort
        type="alpha"
        order={alphaOrder}
        handleSort={() => handleSort('alpha')}
      />
      <Reset
        films={films}
        handleClear={handleClear}
        setYearOrder={setYearOrder}
        setAlphaOrder={setAlphaOrder}
      />
    </div>
  );
};

export default SearchSort;
