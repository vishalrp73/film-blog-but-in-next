import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from 'react';
import { ButtonOrder } from '../handlers/types';

type ContextSort = {
  yearOrder: ButtonOrder;
  setYearOrder: Dispatch<SetStateAction<ButtonOrder>>;
  alphaOrder: ButtonOrder;
  setAlphaOrder: Dispatch<SetStateAction<ButtonOrder>>;
  genreOrder: ButtonOrder;
  setGenreOrder: Dispatch<SetStateAction<ButtonOrder>>;
};

interface Props {
  children: ReactNode;
}

const SortContext = createContext<ContextSort>({
  yearOrder: null,
  setYearOrder: () => null,
  alphaOrder: null,
  setAlphaOrder: () => null,
  genreOrder: null,
  setGenreOrder: () => null,
});

export const SortProvider: FC<Props> = ({ children }) => {
  const [yearOrder, setYearOrder] = useState<ButtonOrder>(null);
  const [alphaOrder, setAlphaOrder] = useState<ButtonOrder>(null);
  const [genreOrder, setGenreOrder] = useState<ButtonOrder>(null);

  const returnContext = {
    yearOrder,
    setYearOrder,
    alphaOrder,
    setAlphaOrder,
    genreOrder,
    setGenreOrder,
  };

  return (
    <SortContext.Provider value={returnContext}>
      {children}
    </SortContext.Provider>
  );
};

export const useSortContext = () => {
  return useContext(SortContext);
};
