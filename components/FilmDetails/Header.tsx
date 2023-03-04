import type { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { MiniSearch } from '../Search';
import * as styles from './Header.css';

interface HeaderProps {
  title: string;
}

const FilmDetailsHeader: FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className={styles.headerContainer}>
      <button className={styles.backBtn} onClick={() => router.back()}>
        <span>back</span>
      </button>
      <h1 className={styles.title}>{title}</h1>
      <MiniSearch toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default FilmDetailsHeader;
