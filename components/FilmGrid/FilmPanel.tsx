import type { FC } from 'react';
import Link from 'next/link';
import * as styles from './FilmPanel.css';

interface Props {
  id: number;
  title: string;
  thumbnail: string;
}

const FilmPanel: FC<Props> = ({ id, title, thumbnail }) => {
  return (
    <Link href={`/films/${id}`} key={id}>
      <a>
        <div
          style={{ background: thumbnail }}
          className={styles.panelContainer}
        >
          {title}
        </div>
      </a>
    </Link>
  );
};

export default FilmPanel;
