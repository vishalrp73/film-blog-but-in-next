import { type FC, type Dispatch, type SetStateAction } from 'react';
import { Film } from '@/lib/types';
import { useSort } from '@/lib/hooks';
import { Reset, Sort } from '@/components/Buttons';
import { Search } from '@/components/Search';
import { container } from './SearchSort.css';

interface Props {
  films: Film[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  placeholderTitle: string;
  handleClear: () => void;
}

const SearchContainer: FC<Props> = ({
  films,
  searchTerm,
  setSearchTerm,
  placeholderTitle,
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
      <div className={container}>
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

export default SearchContainer;
