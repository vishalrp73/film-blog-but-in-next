import { getRandomFilm } from '@/lib/functions';
import { useSort } from '@/lib/hooks/useSort';
import { Film } from '@/lib/types';
import type { Dispatch, FC, SetStateAction } from 'react';
import Reset from '../Buttons/Reset/Reset';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import * as styles from './SearchSort.css';

interface Props {
  films: Film[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleClear: () => void;
}

const SearchSort: FC<Props> = ({
  films,
  searchTerm,
  setSearchTerm,
  handleClear,
}) => {
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
      <div className={styles.sortContainer}>
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
    </div>
  );
};

export default SearchSort;
