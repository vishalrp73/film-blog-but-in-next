import { FC } from 'react';
import { useRouter } from 'next/router';
import * as styles from './Header.css';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div className={styles.headerContainer}>
      <button className={styles.backBtn} onClick={() => router.back()}>
        <p>back</p>
      </button>

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Header;
