import type { FC } from 'react';
import clsx from 'clsx';
import { ButtonOrder, ButtonType, Film } from '@/lib/types';

const getButtonValue = (type: ButtonType, order: ButtonOrder): string => {
  const base = type === 'random' ? "I'M FEELING LUCKY" : type;
  if (order === 'asc') return `${base} ⇡`;
  if (order === 'desc') return `${base} ⇣`;
  return base;
};

interface Props {
  type: ButtonType;
  order: ButtonOrder;
  handleSort: () => void;
  className?: string;
}

const Sort: FC<Props> = ({ type, order, handleSort, className }) => {
  return (
    <input
      type="button"
      className={clsx(className)}
      value={getButtonValue(type, order)}
      onClick={() => handleSort()}
    />
  );
};

export default Sort;
