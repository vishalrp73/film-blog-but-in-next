import type { FC } from 'react';
import { useRouter } from 'next/router';
import { MiniSearch } from '../Search';
import useToggle from '../../lib/hooks/useToggle';
import { translucent } from '../../styles/translucent.css';
import clsx from 'clsx';
import * as styles from './Header.css';

interface HeaderProps {
  title: string;
}

const FilmDetailsHeader: FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  const [toggle, setToggle] = useToggle();
  return (
    <div className={clsx(styles.headerContainer, translucent)}>
      <button className={styles.backBtn} onClick={() => router.back()}>
        <span>back</span>
      </button>
      <h1 className={styles.title}>{title}</h1>
      <MiniSearch toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default FilmDetailsHeader;
