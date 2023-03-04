import type { FC } from 'react';
import Link from 'next/link';
import * as styles from './FilmPanel.css';
import clsx from 'clsx';

interface Props {
  id: number;
  title: string;
  thumbnail: string;
  carousel?: boolean;
}

const FilmPanel: FC<Props> = ({ id, title, thumbnail, carousel = false }) => {
  return (
    <Link href={`/films/${id}`} key={id}>
      <a>
        <div
          style={{ background: thumbnail }}
          className={clsx(styles.panelContainer, {
            [styles.emblaSlide]: carousel,
          })}
        >
          {title}
        </div>
      </a>
    </Link>
  );
};

export default FilmPanel;
