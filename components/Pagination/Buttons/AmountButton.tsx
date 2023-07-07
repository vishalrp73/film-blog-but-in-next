import { type FC, type Dispatch, type SetStateAction } from 'react';
import clsx from 'clsx';
import { filterBtn, activeBtn } from './Buttons.css';

interface Props {
  amountNum: number;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const AmountButton: FC<Props> = ({ amountNum, amount, setAmount }) => {
  return (
    <button
      type="button"
      onClick={() => setAmount(amountNum)}
      className={clsx(filterBtn, {
        [activeBtn]: amountNum === amount,
      })}
    >
      {amountNum}
    </button>
  );
};

export default AmountButton;
