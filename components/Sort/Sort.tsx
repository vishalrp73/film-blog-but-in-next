import type { FC } from 'react';
import clsx from 'clsx';
import { ButtonOrder, ButtonType, Film } from '@/lib/types';
import * as styles from './Sort.css';

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
}

const Sort: FC<Props> = ({ type, order, handleSort }) => {
  return (
    <input
      type="button"
      className={clsx(styles.sortBtn)}
      value={getButtonValue(type, order)}
      onClick={() => handleSort()}
    />
  );
};

export default Sort;
