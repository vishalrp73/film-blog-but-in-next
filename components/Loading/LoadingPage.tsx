import type { FC } from 'react';
import Loading from './Loading';
import * as styles from './LoadingPage.css';

const LoadingPage: FC = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default LoadingPage;
