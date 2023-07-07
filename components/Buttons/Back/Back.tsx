'use client';
import { type FC } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './Back.css';

const Back: FC = () => {
  const router = useRouter();
  return (
    <button onClick={router.back} className={styles.backBtn}>
      &#8592; back
    </button>
  );
};

export default Back;
