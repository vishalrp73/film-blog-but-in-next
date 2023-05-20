import Link from 'next/link';
import clsx from 'clsx';
import { translucent } from '@/styles/translucent.css';
import * as styles from './layout.css';

export const metadata = {
  title: 'Film',
  description: 'now in NextJS 13!',
};

export default function FilmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={clsx(styles.headerContainer, translucent)}>
        <Link href="/">
          <button className={styles.backBtn}>&#8592; back</button>
        </Link>
      </div>
      {children}
    </div>
  );
}
