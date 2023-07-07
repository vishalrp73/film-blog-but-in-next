import { type FC } from 'react';
import clsx from 'clsx';
import * as styles from './Display.css';

interface Props {
  isBoolean: boolean;
  errorMessage: string;
  successMessage: string;
}

const Display: FC<Props> = ({ isBoolean, errorMessage, successMessage }) => {
  // error state
  if (!isBoolean) {
    return (
      <div className={clsx(styles.postDisplayContainer, styles.errorDisplay)}>
        <span className={styles.displayText}>{errorMessage}</span>
      </div>
    );
  }

  return (
    <div className={styles.postDisplayContainer}>
      <span className={styles.displayText}>{successMessage}</span>
    </div>
  );
};

export default Display;
