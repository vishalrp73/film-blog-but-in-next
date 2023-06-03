import type { FC } from 'react';
import Image from 'next/image';
import Spinner from '../../lib/img/loading-spinner.gif';
import * as styles from './Loading.css';

const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <Image src={Spinner.src} alt="loading" width={50} height={50} />
    </div>
  );
};

export default Loading;
