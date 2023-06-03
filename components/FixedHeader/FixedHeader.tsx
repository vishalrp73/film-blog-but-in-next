import { Film } from '@/lib/types';
import { translucent } from '@/styles/translucent.css';
import clsx from 'clsx';
import type { FC } from 'react';
import Back from '../Buttons/Back/Back';
import HeaderMenu from '../FilmDetails/HeaderMenu';
import * as styles from './FixedHeader.css';

interface Props {
  films: Film[];
  title?: string;
}

const FixedHeader: FC<Props> = ({ films, title }) => {
  return (
    <div className={clsx(styles.headerContainer, translucent)}>
      <div className={styles.fixedHeaderContainer}>
        <Back />
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.miniSearchContainer}>
          <HeaderMenu films={films} />
        </div>
      </div>
    </div>
  );
};

export default FixedHeader;
