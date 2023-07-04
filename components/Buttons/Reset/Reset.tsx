import type { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';
import { ButtonOrder, Film } from '@/lib/types';
import { useSearchContext } from '@/context/search';
import ResetIcon from '../../../lib/img/reset-icon.png';
import * as styles from './Reset.css';
interface Props {
  handleClear: () => void;
  setYearOrder: Dispatch<SetStateAction<ButtonOrder>>;
  setAlphaOrder: Dispatch<SetStateAction<ButtonOrder>>;
}

const Reset: FC<Props> = ({ handleClear, setYearOrder, setAlphaOrder }) => {
  const { setSearchedFilms } = useSearchContext();

  const handleReset = () => {
    handleClear();
    setSearchedFilms([]);
    setYearOrder(null);
    setAlphaOrder(null);
  };

  return (
    <button type="button" onClick={handleReset} className={styles.resetBtn}>
      <Image alt="reset" src={ResetIcon} width={28} height={28} />
    </button>
  );
};

export default Reset;
