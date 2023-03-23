import type { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import * as styles from './FilmPanel.css';

interface Props {
  id: number;
  thumbnail: string;
  carousel?: boolean;
}

const FilmPanel: FC<Props> = ({ id, thumbnail, carousel = false }) => {
  return (
    <Link href={`/films/${id}`} key={id}>
      <a className={styles.link}>
        <div
          style={{ backgroundImage: `url(${thumbnail})` }}
          className={clsx(styles.panelContainer, {
            [styles.emblaSlide]: carousel,
          })}
        />
      </a>
    </Link>
  );
};

export default FilmPanel;
