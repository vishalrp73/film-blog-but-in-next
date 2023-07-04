import type { Dispatch, FC, SetStateAction } from 'react';
import { Film } from '@/lib/types';
import { getRandomFilm } from '@/lib/functions';
import { useSort } from '@/lib/hooks/useSort';
import Reset from '../Buttons/Reset/Reset';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import * as styles from './SearchSort.css';

interface Props {
  films: Film[];
  searchTerm: string;
  placeholderTitle: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleClear: () => void;
}

const SearchSort: FC<Props> = ({
  films,
  searchTerm,
  placeholderTitle,
  setSearchTerm,
  handleClear,
}) => {
  const { handleSort, yearOrder, setYearOrder, alphaOrder, setAlphaOrder } =
    useSort(films);

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholderTitle={placeholderTitle}
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
        <Sort
          type="random"
          handleSort={() => handleSort('random')}
          order={null}
        />
        <Reset
          handleClear={handleClear}
          setYearOrder={setYearOrder}
          setAlphaOrder={setAlphaOrder}
        />
      </div>
    </div>
  );
};

export default SearchSort;
