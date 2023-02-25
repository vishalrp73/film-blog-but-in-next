import { FC } from 'react';
import clsx from 'clsx';
import { getButtonValue } from '../../handlers';
import { useSort } from './useSort';
import { ButtonType } from '../../handlers/types';
import * as styles from './Sort.css';

interface Props {
  type: ButtonType;
}

const Sort: FC<Props> = ({ type }) => {
  const { getOrder, getControllerMethod } = useSort();

  return (
    <input
      type="button"
      className={clsx(styles.sortBtn, {
        [styles.yearBtnContainer]: type === 'year',
        [styles.alphaBtnContainer]: type === 'alpha',
        [styles.randomFilmContainer]: type === 'random',
      })}
      value={getButtonValue(type, getOrder(type))}
      onClick={() => getControllerMethod(type)}
    />
  );
};

export default Sort;
