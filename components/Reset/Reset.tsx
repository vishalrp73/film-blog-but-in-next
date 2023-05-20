import type { Dispatch, FC, SetStateAction } from 'react';
import { ButtonOrder, Film } from '@/lib/types';
import { useSearchContext } from '@/context/search';

interface Props {
  films: Film[];
  handleClear: () => void;
  setYearOrder: Dispatch<SetStateAction<ButtonOrder>>;
  setAlphaOrder: Dispatch<SetStateAction<ButtonOrder>>;
}

const Reset: FC<Props> = ({
  films,
  handleClear,
  setYearOrder,
  setAlphaOrder,
}) => {
  const { setSearchedFilms } = useSearchContext();

  const handleReset = () => {
    handleClear();
    setSearchedFilms(films);
    setYearOrder(null);
    setAlphaOrder(null);
  };

  return (
    <button type="button" onClick={handleReset}>
      reset
    </button>
  );
};

export default Reset;
