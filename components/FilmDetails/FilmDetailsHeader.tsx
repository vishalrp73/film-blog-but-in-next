import type { FC } from 'react';
import { useRouter } from 'next/router';
import * as styles from './FilmDetailsHeader.css';

interface HeaderProps {
  title: string;
}

const FilmDetailsHeader: FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div className={styles.headerContainer}>
      <button className={styles.backBtn} onClick={() => router.back()}>
        <span>back</span>
      </button>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default FilmDetailsHeader;
