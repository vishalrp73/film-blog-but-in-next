import { translucent } from '@/styles/translucent.css';
import clsx from 'clsx';
import * as styles from './layout.css';
import Back from '@/components/Buttons/Back/Back';

export default function FilmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={clsx(styles.headerContainer, translucent)}>
        <Back />
      </div>
      {children}
    </div>
  );
}
