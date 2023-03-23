import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useSortContext } from '../../context/sort';
import clsx from 'clsx';
import { getButtonValue } from '../../handlers';
import { useSort } from './useSort';
import { ButtonType } from '../../handlers/types';
import * as styles from './Sort.css';

interface Props {
  type: ButtonType;
  className?: string;
}

const Sort: FC<Props> = ({ type, className }) => {
  const { getOrder, getControllerMethod } = useSort();

  const retrieveButtonText = () => getButtonValue(type, getOrder(type));
  const [buttonText, setButtonText] = useState<string>(retrieveButtonText);
  const { yearOrder, alphaOrder, genreOrder } = useSortContext();

  useEffect(() => {
    setButtonText(getButtonValue(type, getOrder(type)));
  }, [yearOrder, alphaOrder, genreOrder]);

  return (
    <input
      type="button"
      className={clsx(styles.sortBtn, className, {
        [styles.yearBtnContainer]: type === 'year',
        [styles.alphaBtnContainer]: type === 'alpha',
        [styles.genreBtnContainer]: type === 'genre',
        [styles.reviewedBtnContainer]: type === 'reviewed',
        [styles.randomFilmContainer]: type === 'random',
      })}
      value={buttonText}
      onClick={() => getControllerMethod(type)}
    />
  );
};

export default Sort;
