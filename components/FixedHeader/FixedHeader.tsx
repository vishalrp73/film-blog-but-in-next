import type { FC } from 'react';
import HeaderMenu from '../FilmDetails/HeaderMenu';
import Back from '../Buttons/Back/Back';
import * as styles from './FixedHeader.css';
import { Film } from '@/lib/types';

interface Props {
  films: Film[];
  title?: string;
}

const FixedHeader: FC<Props> = ({ films, title }) => {
  return (
    <div className={styles.headerContainer}>
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
